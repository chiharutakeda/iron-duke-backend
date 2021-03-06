import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { TodoListEntity } from '../entity/TodoListsEntity';
import {
  TodoListInputType,
  TodoListDeleteInputType,
} from '../Inputtype/TodoListInputType';

@Resolver(TodoListEntity)
export class ToDoListResolver {
  @Query(() => String)
  async sampleHello() {
    return 'hello world!!';
  }

  //一番若いidのtodoを返す
  @Query(() => TodoListEntity, { nullable: true })
  async getToDolist() {
    const todo = await TodoListEntity.findOne();
    return todo;
  }

  //全てのtodoを返す
  @Query(() => [TodoListEntity], { nullable: true })
  async getAllToDolist() {
    const todo = await TodoListEntity.find({ order: { id: 'DESC' } });
    return todo;
  }

  @Mutation(() => TodoListEntity, { nullable: true })
  async RegistToDo(
    @Arg('todo') { firstName, lastName, todo }: TodoListInputType
  ) {
    //createしたら
    const createdToDo = await TodoListEntity.create({
      firstName: firstName,
      lastName: lastName,
      todo: todo,
    });
    //保存してその内容をreturnする。
    return createdToDo.save();
  }

  //todo削除
  @Mutation(() => TodoListEntity)
  async DeleteToDo(@Arg('deleteTODO') { ID }: TodoListDeleteInputType) {
    //返すためにidで検索して
    const todo = await TodoListEntity.findOne({ id: ID });
    //削除する
    await TodoListEntity.delete({ id: ID });

    return todo;
  }
}
