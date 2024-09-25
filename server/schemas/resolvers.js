const { Tech, Matchup, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError('Not logged in');
    },
    getNotes: async (parent, { userId }) => {
      const user = await User.findById(userId);
      if (!user) {
        throw new AuthenticationError('User not found');
      }
      return user.notes;
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
    signup: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await bcrypt.compare(password, user.password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addNote: async (parent, { userId, content }) => {
      const user = await User.findById(userId);
      if (!user) {
        throw new AuthenticationError('User not found');
      }
      const newNote = { content, date: new Date().toISOString() };
      user.notes.push(newNote);
      await user.save();
      return user.notes[user.notes.length - 1];
    },
    deleteNote: async (parent, { userId, noteId }) => {
      const user = await User.findById(userId);
      if (!user) {
        throw new AuthenticationError('User not found');
      }

      // Find the note to delete
      const noteToDelete = user.notes.find(note => note._id.toString() === noteId);
      if (!noteToDelete) {
        throw new Error('Note not found');
      }

      // Filter out the note to delete
      user.notes = user.notes.filter(note => note._id.toString() !== noteId);
      await user.save();

      // Return the deleted note
      return noteToDelete;
    },
  },
};

module.exports = resolvers;
