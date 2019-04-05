import express from 'express';

//graphql
//import graphqlHTTP from 'express-graphql';

import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';


//import { schema } from './data/schema';

const app = express();

/*
app.get('/', (req, res) => {
    res.send('Ruta raiz todo listo!!');
});

app.use('/graphql', graphqlHTTP({
    //schema a utilizar
    schema,
    // utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Servidor esta funcionando!!');
});
*/

const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app});

app.listen({port: 4000}, () => console.log(`El servidor esta correindo http://localhost:4000${server.graphqlPath}`));




