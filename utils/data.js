const userData = [
    {
        username: 'john_doe',
        email: 'john_doe@example.com',
        thoughts: [],
        friends: ['jane_smith', 'alice_jones']
    },
    {
        username: 'jane_smith',
        email: 'jane_smith@example.com',
        thoughts: [],
        friends: ['john_doe']
    },
    {
        username: 'alice_jones',
        email: 'alice_jones@example.com',
        thoughts: [],
        friends: ['john_doe']
    },
    {
        username: 'bob_brown',
        email: 'bob_brown@example.com',
        thoughts: [],
        friends: ['jane_smith', 'alice_jones']
    },
    {
        username: 'carol_white',
        email: 'carol_white@example.com',
        thoughts: [],
        friends: ['john_doe', 'bob_brown']
    },
    {
        username: 'dave_black',
        email: 'dave_black@example.com',
        thoughts: [],
        friends: ['carol_white']
    },
];

const thoughtData = [
    {
        thoughtText: 'This is a thought from john_doe',
        username: 'john_doe',
        reactions: [
            {
                reactionBody: 'Great thought!',
                username: 'jane_smith'
            },
            {
                reactionBody: 'I totally agree!',
                username: 'alice_jones'
            },
            {
                reactionBody: 'Interesting perspective!',
                username: 'bob_brown'
            }
        ]
    },
    {
        thoughtText: 'Another thought from jane_smith',
        username: 'jane_smith',
        reactions: [
            {
                reactionBody: 'Nice one!',
                username: 'john_doe'
            },
            {
                reactionBody: 'Very insightful!',
                username: 'carol_white'
            }
        ]
    },
    {
        thoughtText: 'Thought from alice_jones',
        username: 'alice_jones',
        reactions: [
            {
                reactionBody: 'I like this thought!',
                username: 'john_doe'
            },
            {
                reactionBody: 'Thanks for sharing!',
                username: 'bob_brown'
            }
        ]
    },
    {
        thoughtText: 'Thought from bob_brown',
        username: 'bob_brown',
        reactions: [
            {
                reactionBody: 'Well said!',
                username: 'carol_white'
            },
            {
                reactionBody: 'I couldn\'t agree more!',
                username: 'dave_black'
            }
        ]
    },
    {
        thoughtText: 'Insightful thought from carol_white',
        username: 'carol_white',
        reactions: [
            {
                reactionBody: 'Great insight!',
                username: 'john_doe'
            },
            {
                reactionBody: 'Very true!',
                username: 'jane_smith'
            }
        ]
    },
    {
        thoughtText: 'Thought-provoking idea from dave_black',
        username: 'dave_black',
        reactions: [
            {
                reactionBody: 'I never thought of it that way!',
                username: 'carol_white'
            },
            {
                reactionBody: 'Brilliant!',
                username: 'bob_brown'
            }
        ]
    },
];

module.exports = { userData, thoughtData };
