import Project from "../models/project.js";

export const resolvers = {
    Query: {
        async projects(_, args) {
            const projects = await Project.find({ ...args });
            if (projects.length == 0) {
                throw new Error('No existen proyectos en la base de datos aún')
            }
            return projects
        },
        async project(_, { _id }) {
            return await Project.findById(_id);
        }
    },
    Mutation: {
        async createProject(_, { clientName, value, department, city }) {
            const newProject = new Project({clientName, value, department, city});
            await newProject.save();
            return newProject;
        },
        async deleteProject(_, { _id }) {
            return await Project.findByIdAndDelete(_id);
        },
        async updateProject(_, args) {
            return await Project.findByIdAndUpdate(args._id, args, { new: true });
        }
    }
};
