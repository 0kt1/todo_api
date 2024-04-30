import { getManager } from 'typeorm';
import { TodoItem } from '../entities/todoitem';

export const resolvers = {
  Query: {
    todos: async () => {
      const entityManager = getManager();
      return await entityManager.find(TodoItem);
    },
  },
  Mutation: {
    addTodo: async (_, { title }) => {
      const entityManager = getManager();
      const task = new TodoItem();
      task.title = title;
      await entityManager.save(task);
      return task;
    },

    toggleTodoStatus: async (_, { id }) => {
      const entityManager = getManager();
      // const task = await entityManager.findOneOrFail(TodoItem, id);

      const task = await entityManager.findOneOrFail(TodoItem,{ where: { id } });
    // if (!ifUser) throw new Error("Account not found");

      task.completed = !task.completed;
      await entityManager.save(task);
      return task;
    },

    deleteTask: async (_, { id }) => {
      const entityManager = getManager();
      const task = await entityManager.findOneOrFail(TodoItem,{ where: { id } });

      if (!task) {
        throw new Error(`Task with ID ${id} not found`);
      }

      const affected = await entityManager.remove(task);

      return task;
      // await entityManager.remove(task);
      // // return task;
    },

    editTask: async (_, { id, title }) => {
      const entityManager = getManager();
      const task = await entityManager.findOneOrFail(TodoItem,{ where: { id } });

      if (!task) {
        throw new Error(`Task with ID ${id} not found`);
      }

      task.title = title;
      await entityManager.save(task);
      return task;
    },

  },

  

};