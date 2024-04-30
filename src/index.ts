import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import { resolvers } from './resolvers/resolvers';
import { createConnection } from 'typeorm';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection().then(() => {
  server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
});
