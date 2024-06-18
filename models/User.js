const { Schema, model } = require('mongoose');

// Define the User schema
const userSchema = new Schema(
  {
    // The user's username
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    // The user's email
    email: {
      type: String,
      required: true,
      unique: true,
      // Validate the email format
      match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    // An array of ObjectIds referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // An array of ObjectIds referencing the User model (self-reference for friends)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// Create a virtual property 'friendCount' to get the number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create the User model using the userSchema
const User = model('User', userSchema);

module.exports = User;
