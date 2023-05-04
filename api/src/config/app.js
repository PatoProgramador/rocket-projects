import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import http from 'http';

export async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);

    app.get('/', (req, res) => 
    res.send('¡Bienvenid@ a mi app! esta aplicación está desarrollada con graphql así que te invito a que pruebes con la ruta /graphql. ¡Saludos!'))

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();

    app.use("/graphql", cors(), express.json(), expressMiddleware(server));

    await new Promise(resolve => httpServer.listen({
        port: 4000
    }, resolve));
    
    console.log('🚀 Server ready on port 4000');
};