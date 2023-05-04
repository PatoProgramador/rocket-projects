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
    {
        mutation($input: ProjectInput){
            createProject(input: $input){
                _id
                clientName
                value
                department
                city
            }
        }
    }
`