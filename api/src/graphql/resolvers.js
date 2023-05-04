import Project from "../models/project.js";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Holis'
        },
        async projects(_, { input }) {
            const projects = await Project.find({...input});
            if(projects.length == 0) {
                throw new Error('No existen proyectos en la base de datos aún')
            }
            return projects
        },
        async project(_, {_id}) {
            return await Project.findById(_id);
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
