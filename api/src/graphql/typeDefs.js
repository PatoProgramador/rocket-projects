import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        projects(clientName: String, value: Int, department: String, city: String): [Project]
        project(_id: ID!): Project
    }

    type Mutation {
        createProject(clientName: String!, value: Int!, department: String!, city: String!): Project
        deleteProject(_id: ID!): Project
        updateProject(_id: ID!, clientName: String, value: Int, department: String, city: String): Project
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

`;
