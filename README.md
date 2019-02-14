
# Repositorio
```
git clone https://github.com/yogparra/node-graphql-servidor.git
cd node-graphql-servidor
npm i
npm run start
```

# Ejecucion
```
Ruta Raiz   --> http://localhost:8000
Graphql     --> http://localhost:8000/graphql
```

# query/mutation graphiql
```
mutation {
  crearCliente (input: {
    nombre:"Andres"
    apellido:"Parra"
    empresa:"Nintendo"
    email:"andres.parra@gmail.com"
    edad: 5
    tipo: BASICO
  }) {
    id
    edad
    tipo
  }
}

query {
  getCliente(id: "ca2a296aea6cfa8d24c7"){
    nombre
    apellido
    edad
    tipo
  }
}
```