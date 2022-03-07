let express = require('express');
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');
let { root } =  require('./src/resolvers')
console.log(root)
let datos = {}
// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
type Query {
    products: [Product]
    product(id: ID!): Product
}
type Mutation {
    createProduct(titulo: String, descripcion: String): [NewProduct!],
    deleteProduct(id: ID!): [Product],
    updateProduct(id: ID!, titulo: String!, descripcion: String!): [Product]
}
type Product {
    id: ID!
    titulo: String
    descripcion: String
}
type NewProduct {
    id: ID
    titulo: String
    descripcion: String
}
`);


let app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');