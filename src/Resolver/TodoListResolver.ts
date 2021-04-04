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
