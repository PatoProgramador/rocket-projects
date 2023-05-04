// import express from 'express';
// import { graphqlHTTP } from 'express-graphql';
// import schema from "./graphql/typeDefs.js"
import { connect } from "./config/database.js";
import { startApolloServer } from './config/app.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';

startApolloServer(typeDefs, resolvers);
connect();

// app.use('/graphql', graphqlHTTP({
//     graphiql: true,
//     schema: schema
// }));
