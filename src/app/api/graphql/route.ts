import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import prisma from "../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolver";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: prisma,
  }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}

