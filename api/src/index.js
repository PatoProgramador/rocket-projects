import { connectDB } from "./config/database.js";
import { startApolloServer } from './config/app.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';

connectDB();

startApolloServer(typeDefs, resolvers);
