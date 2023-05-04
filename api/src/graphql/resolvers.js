import Project from "../models/project.js";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Holis'
        },
        async getProjects() {
            const projects = await Project.find();
            return projects;
        }
    },
    Mutation: {
        async createProject(_, { input }) {
           const newProject = new Project(input);
           await newProject.save();
           return newProject;
        },
        async deleteProject(_, { _id }) {
            return await Project.findByIdAndDelete(_id);
        },
        async updateProject(_, {_id, input}) {
            return await Project.findByIdAndUpdate(_id, input, { new: true});
        }
    }
};
