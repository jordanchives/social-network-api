const { Thought, User} = require("../models");

async function createReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    

    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );

    res.status(202).json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { createReaction, deleteReaction };
