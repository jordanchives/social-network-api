const { Thought, User } = require("../models");

// Get all thoughts
async function getThoughts(req, res) {
  try {
    const thoughts = await Thought.find({});
    return res.status(200).json(thoughts);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

// Get a single thought by its _id
async function getSingleThought(req, res) {
  try {
    const thought = await Thought.findOne({ _id: req.params.id });

    if (!thought) {
      return res.status(404).json({ message: "No thought found with this id!" });
    }
    
    return res.status(200).json(thought);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

// Create a new thought
async function createThought(req, res) {
  try {
    const thought = await Thought.create(req.body);
    const user = await User.findOneAndUpdate(
      { username: req.body.username },
      { $push: { thoughts: thought._id } },
      { new: true }
    );
    
    if (!user) {
      return res.status(200).json({ message: "No user found with this username", ...thought.toObject() });
    }

    return res.status(200).json(thought);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

// Update a thought by _id
async function updateThought(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: "No thought found with this id" });
    }

    res.status(200).json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Delete a thought by _id
async function deleteThought(req, res) {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.id });

    if (!thought) {
      return res.status(404).json({ message: "No thought found with this id!" });
    }

    res.status(200).json({ message: "Thought deleted" });
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
}

module.exports = {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
};
