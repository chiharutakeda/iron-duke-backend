import { Field, ObjectType, ID } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class TodoListEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: String;

  @Field()
  @Column()
  lastName: String;

  @Field()
  @Column()
  todo: String;
}
