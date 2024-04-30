import { Field, InputType } from "type-graphql"

@InputType()
export class ToDoInput {

  @Field({ nullable: true })
  todo?: string 

}
  

  