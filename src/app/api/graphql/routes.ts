// pages/api/graphql.js
import { ISignIn, ISignUp } from '@/app/interfaces';
import { ApolloError, ApolloServer, gql } from 'apollo-server-micro';
import prisma from '../../../../prisma/client';
import bcrypt from "bcrypt";



const typeDefs = gql`
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
    signup(username: String!, password: String!): User
    signin(username: String!, password: String!): User
  }
`;

const resolvers = {
  Query: {
    users: () =>{

    },
  },
  Mutation: {
   signup: async (_:unknown, { name,email, password,confirmPassword }:ISignUp) => {
    const existingUser =await prisma.user.findUnique({where:{
        email,
    }})
    if(password === confirmPassword)throw new ApolloError("Password and Confirm Password  do not match")
    if(existingUser) throw new ApolloError("User already exists ")
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser =await prisma.user.create({
        data:{
            email,
            hashedPassword,
            name:name
        }
    });
    const user = {...newUser}
//delete user.hashedPassword
return user;
      }, 

    signin:async (_:unknown, { email, password }:ISignIn) => {
        const existingUser =await prisma.user.findUnique({where:{
            email,
        }})
        validPasswors

    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
