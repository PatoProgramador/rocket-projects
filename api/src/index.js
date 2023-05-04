import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from "./graphql/schema.js"
import { connect } from "./config/database.js";

const app = express();
connect();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => console.log('Server listening on port 3000'));