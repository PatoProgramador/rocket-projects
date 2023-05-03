const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {schema} = require('./config/graphql/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => console.log('Server listening on port 3000'));