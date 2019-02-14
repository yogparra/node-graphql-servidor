import { buildSchema }  from 'graphql';

/*
//ejemplo-1
const schema = buildSchema(`
    type Query {
        hola: String
    }
`);
*/

/*
//ejemplo-2
const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
    }
    type Query {
        cliente: Cliente
    }
`);
*/

/*
//ejemplo-3
const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        emails: [Email]
    }
    type Email {
        email: String
    }
    type Query {
        cliente: Cliente
    }
`);
*/

/*
//ejemplo-4
const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
    }
    type Query {
        cliente: Cliente
    }

    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        email: String!
    }
    type Mutation {
        crearCliente(input: ClienteInput) : Cliente
    }
`);
*/

//ejemplo-5
const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
        edad: Int
        tipo: TipoCliente
    }
    enum TipoCliente {
        BASICO
        PREMIUM
    }

    type Query {
        getCliente (id: ID): Cliente
    }
    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        email: String!
        edad: Int!
        tipo: TipoCliente!
    }
    type Mutation {
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;