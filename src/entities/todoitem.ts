import {Field, ObjectType} from "type-graphql";
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity
} from "typeorm";


@Entity('TodoItem')
export class TodoItem {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  
  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;
}
