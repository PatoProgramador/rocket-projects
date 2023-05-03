const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require('./resolvers');

const typeDefs = `

    type Query {
        hello: String
    }
`;

makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

module.exports = { makeExecutableSchema };