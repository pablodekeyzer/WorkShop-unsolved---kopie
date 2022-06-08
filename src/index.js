const { ApolloServer } = require("apollo-server");
const connectDb = require("./config/db");
const { gql } = require('apollo-server');
const mongoose = require("mongoose");
const { Schema } = mongoose;
const resolvers = require("./resolvers");


// Define the GQL types and mutations
const typeDefs = gql`
  type NAMEHERE {
    id: ID!,
  }
  type Query {
    NAMEHEREs: [NAMEHERE]
  }
`;

// Define the schema
let schema = new Schema({
});
let NAMEHERE = mongoose.model('NAMEHERE', schema);
models = { NAMEHERE }
connectDb();

const server = new ApolloServer({
  typeDefs,
  //resolvers,
  context: { models },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});