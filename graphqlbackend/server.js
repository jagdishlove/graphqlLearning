const express = require("express");
const app = express();
const PORT = 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
