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
  
  type User {
    _id: ID!
    email: String!
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
    me: User
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    login(email: String!, password: String!): Auth
    signup(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

