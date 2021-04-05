import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { TodoListEntity } from '../entity/TodoListsEntity';
import { TodoListInputType } from '../Inputtype/TodoListInputType';

@Resolver(TodoListEntity)
export class ToDoListResolver {
  @Query(() => String)
  async sampleHello() {
    return 'hello world!!';
  }

  @Query(() => TodoListEntity, { nullable: true })
  async getToDolist() {
    const todo = await TodoListEntity.findOne();
    return todo;
  }

  //配列指定のやり方
  @Query(() => [TodoListEntity], { nullable: true })
  async getAllToDolist() {
    const todo = await TodoListEntity.find();
    console.log(todo)
    return todo;
  }

  @Mutation(() => TodoListEntity)
  async toDoRegister(
    @Arg('todo') { firstName, lastName, todo }: TodoListInputType
  ) {
    //createしたら
    const createdToDo = await TodoListEntity.create({
      firstName: firstName,
      lastName: lastName,
      todo: todo,
    });
    //保存する。
    createdToDo.save();
    return createdToDo;
  }
}
