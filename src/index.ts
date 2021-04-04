import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Exporess from 'express';
import { buildSchema } from 'type-graphql';
import {ToDoListResolver} from './Resolver/TodoListResolver'


const startApollo = async () => {
  
  const schema = await buildSchema({
    resolvers: [ToDoListResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    mocks: true,
  });

  const app = Exporess();
  
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql');
  });
};

startApollo();
