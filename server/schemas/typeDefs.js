const typeDefs = `
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Note {
    _id: ID!
    content: String!
    date: String!
  }

  type User {
    _id: ID!
    email: String!
    notes: [Note]
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
    me: User
    getNotes(userId: ID!): [Note]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    login(email: String!, password: String!): Auth
    signup(email: String!, password: String!): Auth
    addNote(userId: ID!, content: String!): Note  # Mutation to add a new note
    deleteNote(userId: ID!, noteId: ID!): Note  # Mutation to delete a note
  }
`;

module.exports = typeDefs;
