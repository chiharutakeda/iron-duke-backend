import { Field, ObjectType, ID } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class UserInfoEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'emailを返す' })
  @Column()
  email: string;

  @Field({ description: 'passwordを返す' })
  @Column()
  password: string;

  @Field({ description: '登録日を返す' })
  @CreateDateColumn()
  createdAt: Date;
}

//これはgraphqlのフィールドになる
@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;
}
