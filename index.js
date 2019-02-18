import express from 'express';

//graphql
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

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