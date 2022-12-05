import { ApolloServer } from '@apollo/server'
// @ts-expect-error error of graphql-upload package
import processRequest from 'graphql-upload/processRequest.mjs'
import { startStandaloneServer } from '@apollo/server/standalone';

import schema from './server/graphql/nexus.js'
import { context } from './server/index.js'



(async () => {
const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: context as any,
});

console.log(`🚀  Server ready at: ${url}`);
server.start();

})()

