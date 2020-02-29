import { connectDatabase } from './database/indes';
import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './graphQL/typeDefs';
import { resolvers } from './graphQL/resolvers'


const port = 9000;
const one: number = 1;
const two: number = 2;

// app.get("/", (req, res) => res.send(`1 + 2 = ${one + two}`));

const mount = async (app: Application) => {
    const db = await connectDatabase()
    const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });
    server.applyMiddleware({ app, path: '/api' });

    app.listen(port);
    console.log(`[app]: http://localhost:${port}`);

    const listings = await db.listings.find({}).toArray();
    console.log(listings)
}

mount(express())
