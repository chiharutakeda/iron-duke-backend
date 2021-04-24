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
export class TodoListEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: '苗字を返す' })
  @Column()
  firstName: string;

  @Field({ description: '名前を返す' })
  @Column()
  lastName: string;

  @Field({ description: 'やることリストを返す' })
  @Column()
  todo: string;

  @Field({ description: '登録日を返す' })
  @CreateDateColumn()
  createdAt: Date;
}
