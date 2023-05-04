import Project from "../models/project.js";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Holis'
        },
        async getProjects() {
            const projects = await Project.find();
            if(!projects) {
                return 'No existen proyectos aún :('
            };
            return projects;
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
