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
            }
        ]
    },
];

module.exports = { userData, thoughtData };
