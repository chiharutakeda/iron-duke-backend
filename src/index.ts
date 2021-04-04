import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Exporess from 'express';
import { buildSchema } from 'type-graphql';
import { Resolver, Query, Mutation } from 'type-graphql';

@Resolver()
export class ToDoListResolver {
  @Query(() => String)
  async helloWorld() {
    return 'hello World';
  }

  @Mutation(() => String)
  async toDoRegiste() {
    return 'hello World';
  }
}

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
