const { ApolloServer } = require('apollo-server');

const{ sequelize } = require('./models')

// A map of functions which return data for the schema.
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);

  sequelize.authenticate()
  .then(() => console.log('database connected!!'))
  .catch((err) => console.log(err))
});