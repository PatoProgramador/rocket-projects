import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    {
        projects {
            _id
            clientName
            value
            department
            city
        }
    }
`;

export const CREATE_PROJECT = gql`
    mutation($clientName: String!, $value: Int!, $department: String!, $city: String!) {
        createProject(clientName: $clientName, value: $value, department: $department, city: $city) {
            _id
            clientName
            value
            department
            city
        }
}
`;