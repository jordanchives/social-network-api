const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userData, thoughtData } = require("./data");

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Prepare user data without friends
    const userWithoutFriends = userData.map(user => ({
      username: user.username,
      email: user.email,
      thoughts: user.thoughts
    }));

    // Insert users and save the created users to a variable
    const createdUsers = await User.insertMany(userWithoutFriends);
    console.log('Users seeded');

    // Create a map of username to user ID
    const userIdMap = createdUsers.reduce((map, user) => {
      map[user.username] = user._id;
      return map;
    }, {});

    // Create thoughts and associate them with users
    for (const thought of thoughtData) {
      const createdThought = await Thought.create(thought);
      const user = await User.findOne({ username: thought.username });
      if (user) {
        user.thoughts.push(createdThought._id);
        await user.save();
      }
    }
    console.log('Thoughts seeded and linked to users');

    // Add friends to users using findByIdAndUpdate to avoid VersionError
    for (const user of createdUsers) {
      const friendsUsernames = userData.find(u => u.username === user.username).friends;
      const friendsIds = friendsUsernames.map(friendUsername => userIdMap[friendUsername]);
      await User.findByIdAndUpdate(user._id, { friends: friendsIds }, { new: true });
    }
    console.log('Friends linked to users');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Ensure the process exits after completion
    process.exit(0);
  }
};

connection.once("open", async () => {
  await seedDatabase();
});
