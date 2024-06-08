const { User, Thought } = require("../models/");

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

async function getSingleUser(req, res) {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.json(user);
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

    res.json(user);
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

    await Thought.deleteMany({ _id: { $in: user.thoughts }});
    res.json({ message: "User and associated thoughts deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { getUsers, getSingleUser, createUser, updateUser, deleteUser };
