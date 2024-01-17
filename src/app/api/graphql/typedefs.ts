export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    hashedPassword: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signup(name: String!,email:String!,password: String!,confirmPassword:String!): User
    signin(email: String!, password: String!): User
  }
`;