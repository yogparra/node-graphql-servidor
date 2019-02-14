import express from 'express';

//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

//resolvers
import resolvers from './resolvers';
const root = resolvers;

const app = express();

app.get('/', (req, res) => {
    res.send('Ruta raiz todo listo!!');
});


//resolver
/*
//ejemplo-1
const root = { hola: () => "hola mundo" };
*/

/*
ejemplo-2
const root = { cliente: () => {
    return {
        "id": 19998989898944,
        "nombre": "Guillermo",
        "apellido": "Parra",
        "empresa": "Fox",
        "email": "gmo.parra@gmail.com"
    }
}};
*/

/*
ejemplo-3
const root = { cliente: () => {
    return {
        "id": 19998989898944,
        "nombre": "Guillermo",
        "apellido": "Parra",
        "empresa": "Fox",
        "emails": [
            { email: "gmo.parra@gmail.com" },
            { email: "p.pikachu@gmail.com" }
        ]
    }
}};
*/

/*
//ejemplo-4
class Cliente {
    constructor(id, {nombre, apellido, empresa, email} ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email = email;
    }
}

const clientesDB = {};

const root = { 
    cliente: () => {
        return {
            "id": dea3c1667f39ed486e54,
            "nombre": "Guillermo",
            "apellido": "Parra",
            "empresa": "Fox",
            "email": "gmo.parra@gmail.com"                    
        }
    },
    crearCliente: ( {input} ) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDB[id] = input;
        return new Cliente(id, input);
    }
};
*/

app.use('/graphql', graphqlHTTP({
    //schema a utilizar
    schema,
    //el resolver
    rootValue: root,
    // utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Servidor esta funcionando!!');
});