// import {MaxLength,Length} from "class-validator"
import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserInfoInputType {
  @Field()
  @Length(1, 30)
  email: string;

  @Field()
  @Length(1, 30)
  password: string;
}
