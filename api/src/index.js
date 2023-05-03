import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from "./config/graphql/schema.js"

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => console.log('Server listening on port 3000'));