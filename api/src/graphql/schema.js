import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type Query {
        hello: String
        getProjects: [Project]
    }

    type Mutation {
        createProject(input: ProjectInput): Project
    }

    type Project {
        _id: ID
        clientName: String!
        value: Int!
        department: String!
        city: String!
    }

    input ProjectInput {
        clientName: String!
        value: Int!
        department: String!
        city: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});
