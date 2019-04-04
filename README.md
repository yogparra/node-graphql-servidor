
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

# Ejemplos
```
Se modifica la nomenclatura para los tipos Enun
  TipoCliente --> TipoClienteEnum

schema  
  Se incorpora:
    query
      getCliente:
        Cliente
          pedidos: [Pedidos]
    mutation      
      ClienteInpunt
        pedidos: [Pedidos]

  Donde 
    Pedidos 
        producto
        presio
```

# Docker-Basico
```
docker images
docker ps
docker container ls -a
docker rm id
```

# Docker-Otros
```
docker history mongo
docker history mongo --no-trunc
```


# Docker
```
--cargar la imagen de mongo
docker pull mongo

--ejecutar mongo
docker run mongo

--listar contenedores instanciados
docker ps
container id
b513a69727f2

--entrar al contenedor instanciado de  mongo
docker exec -it b513a69727f2 /bin/bash

--ejecutar un  ejemplo
root@b513a69727f2> mongo
root@b513a69727f2> db.a.insert({c:1})
root@b513a69727f2> db.a.find()
{ "_id" : ObjectId("5c69575ba2c35c70a3d0ada6"), "c" : 1 }

--ejecurar exponiendo el puerto
docker run -p 27018:27017 mongo

--ejecutar robomongo conectarse al puerto localhost:27018
```

# Docker-mongo-persistencia
```
terminal-1
crear la instancia de mongo con el nombre de mongo exponiendo el puerto 27018 y montado la base dato en la ruta /var/mongo/data
docker run --name mongo -p 27018:27017 -v /var/mongo/data:/data/db mongo

terminal-2
revisamos los ruta montada
ls -l /var/mongo/data

terminal-3
entramos al contenedor y verificamos la ruta de la data
docker exec -it mongo /bin/bash
root@mongo>cd data/db
root@mongo>ls -l

ó

ejecutamos la instancia de mongo
root@mongo>mongo
root@mongo>db.desarrollo.hijo.insert({ nombre:"andres" })
root@mongo>db.desarrollo.hijo.fing()

docker run -rm --name mongo -p 27018:27017 -v /var/mongo/data:/data/db mongo
docker logs mongo -f
```

# Docker-Produccion
```
docker run -d --name mongo -p 27018:27017 -v /var/mongo/data:/data/db mongo
docker run -d --restart=unless-stopped --name mongo -p 27018:27017 -v /var/mongo/data:/data/db mongo
```


# Creando Aleas GraphiQL
```
query {
  aleas_uno: getCliente (id: "5c6abd01a109a319e8083928"){
    nombre
    apellido
    email  
  }
  
  aleas_dos: getCliente (id: "5ca65fa1763540297024f64a"){
    nombre
    apellido
    email  
  }
}
```


# Creando Fragment GraphiQL
```
query {
  aleas_uno: getCliente (id: "5c6abd01a109a319e8083928"){
    ...clientes
    id
  }
  
  aleas_dos: getCliente (id: "5ca65fa1763540297024f64a"){
    ...clientes
    tipo
  }
}

fragment clientes on Cliente {
   nombre
   apellido
   email  
}
```