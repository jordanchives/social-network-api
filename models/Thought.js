const { Schema, model, Types } = require('mongoose');
const { format } = require('date-fns');

// Define the Reaction schema (subdocument schema for Thought)
const reactionSchema = new Schema(
  {
    // The reaction's unique id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    // The reaction's body text
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    // The username of the user who created the reaction
    username: {
      type: String,
      required: true
    },
    // The timestamp when the reaction was created
    createdAt: {
      type: Date,
      default: Date.now,
      // Getter method to format the timestamp
      get: (timestamp) => format(timestamp, 'MM/dd/yyyy, hh:mm:ss')
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false,
    _id: false
  }
);

// Define the Thought schema
const thoughtSchema = new Schema(
  {
    // The text of the thought
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    // The timestamp when the thought was created
    createdAt: {
      type: Date,
      default: Date.now,
      // Getter method to format the timestamp
      get: (timestamp) => format(timestamp, 'MM/dd/yyyy, hh:mm:ss')
    },
    // The username of the user who created the thought
    username: {
      type: String,
      required: true
    },
    // An array of reactions (nested documents using reactionSchema)
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Create a virtual property 'reactionCount' to get the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
