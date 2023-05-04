import Project from "../models/project.js";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Holis'
        }
    },
    Mutation: {
        async createProject(_, { input }) {
           const newProject = new Project(input);
           await newProject.save();
           return newProject;
        }
    }
};
