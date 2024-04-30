import { gql } from 'apollo-server';

const typeDefs = gql`
  type TodoItem {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [TodoItem!]!
  }

  type Mutation {
    addTodo(title: String!): TodoItem!
    toggleTodoStatus(id: ID!): TodoItem!
  }

  type Mutation {
    deleteTask(id: ID!): TodoItem!
  }

  type Mutation {
    editTask(id: ID!, title: String!): TodoItem!
    toggleTaskCompletion(id: ID!): TodoItem!
  }

`;

export default typeDefs;
