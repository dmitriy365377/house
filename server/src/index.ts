import express from 'express'
import { ApolloServer } from 'apollo-server-express' 
import { typeDefs } from './graphQL/typeDefs';
import { resolvers } from './graphQL/resolvers'


const app = express();
const port = 9000;

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api' });

// app.use(bodyParser.json())

const one: number = 1;
const two: number = 2;


app.get("/", (req, res) => res.send(`1 + 2 = ${one + two}`));
app.listen(port);

console.log(`[app]: http://localhost:${port}`);
