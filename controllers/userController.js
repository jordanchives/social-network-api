const { User, Thought } = require("../models/");

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

// Get a single user by its _id and populated thought and friend data
async function getSingleUser(req, res) {
  try {
    // const user = await User.findOne({ _id: req.params.id });
    const user = await User.findOne({ _id: req.params.id }).populate('thoughts').populate('friends');

    if (!user) {
      return res.status(404).json({ message: "No user found with this id" });
    };

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "No user found with this id" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });

    if (!user) {
      return res.status(404).json({ message: "No user found with this id" });
    }

    await Thought.deleteMany({ _id: { $in: user.thoughts } });

    await User.updateMany(
      { friends: req.params.id },
      { $pull: { friends: req.params.id } }
    );

    res.status(200).json({ message: "User and associated thoughts deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function addFriend(req, res) {
  try {
    console.log(req.params);
    const test = await User.findOne({ _id: req.params.userId });
    console.log(test);
    console.log(req.params.userId);
    console.log(req.params.friendId);
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "No user found with this id" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "No user found with this id" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
