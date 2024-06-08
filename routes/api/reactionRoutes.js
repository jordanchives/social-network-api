const router = require('express').Router();
const {
    getReactions,
    createReaction,
    deleteReaction,
} = require('../../controllers/reactionController');

// /api/reactions
router.route('/').get(getReactions).post(createReaction);

// /api/reactions/:id
router.route('/:id').delete(deleteReaction);

module.exports = router;
