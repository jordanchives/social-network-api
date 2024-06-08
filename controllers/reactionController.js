const { Reaction } = require('../models');

async function getReactions(req, res) {
    try {
        const reactions = await Reaction.find({});
        return res.json(reactions);
    } catch (err) {
        console.error(err);
        return res.status(400).json(err);
    }
}

async function createReaction(req, res) {
    try {
        const reaction = await Reaction.create(req.body);
        return res.json(reaction);
    } catch (err) {
        console.error(err);
        return res.status(400).json(err);
    }
}

async function deleteReaction(req, res) {
    try {
        const reaction = await Reaction.findOneAndDelete({ _id: req.params.id });

        if (!reaction) {
            return res.status(404).json({ message: 'No reaction found with this id!' });
        }

        res.json(reaction);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = { getReactions, createReaction, deleteReaction };
