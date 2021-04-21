// import {MaxLength,Length} from "class-validator"
import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class TodoListInputType {
  @Field()
  @Length(1, 30)
  firstName: string;

  @Field()
  @Length(1, 30)
  lastName: string;

  @Field()
  @Length(1, 500)
  todo: string;
}

@InputType()
export class TodoListDeleteInputType {
  @Field()
  ID: number;
}
