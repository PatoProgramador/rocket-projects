import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        hello: String
        projects(input: UpdateProjectInput): [Project]
        project(_id: ID!): Project
    }

    type Mutation {
        createProject(input: ProjectInput): Project
        deleteProject(_id: ID!): Project
        updateProject(_id: ID!, input: UpdateProjectInput): Project
    }

    type Project {
        _id: ID
        clientName: String!
        value: Int!
        department: String!
        city: String!
        createdAt: String
        updatedAt: String
    }

    input ProjectInput {
        clientName: String!
        value: Int!
        department: String!
        city: String!
    }
    input UpdateProjectInput {
        clientName: String
        value: Int
        department: String
        city: String
    }
`;
