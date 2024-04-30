import {Field, ObjectType} from "type-graphql";
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity
} from "typeorm";


@Entity('TodoItem')
export class TodoItem extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field({nullable: true})
  @Column({nullable: true})
  title!: string;

  @Column({ default: false })
  completed: boolean;
}
