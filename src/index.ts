import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Exporess from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { ToDoListResolver } from './Resolver/TodoListResolver';
import { UserInfoResolver } from './Resolver/UserInfoResolver';

const startApollo = async () => {
  //ormconfig.jsonをもとにデータベースに接続
  await createConnection();

  //リゾルバーからスキーマ作る
  const schema = await buildSchema({
    resolvers: [ToDoListResolver, UserInfoResolver],
    emitSchemaFile: true,
  });

  //スキーマからapolloサーバー立てる
  const apolloServer = new ApolloServer({
    schema,
  });

  const app = Exporess();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql');
  });
};

startApollo();
