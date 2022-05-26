const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const Schema = new GraphQLObjectType({
  name: "Schema",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    schema: {
      type: Schema,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parentValue, args) {
        return {
          id: "1",
          name: "John Doe",
          age: 32,
        };
      },
    },
  },
});
