import mongoose from 'mongoose';
import { Clientes } from './db';
//import { resolve } from 'url';
//import { rejects } from 'assert';


/*
class Cliente {
    constructor(id, {nombre, apellido, empresa, email, edad, tipo, pedidos} ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email = email;
        this.edad = edad;
        this.tipo = tipo;
        this.pedidos = pedidos;
    }
}
*/

//const clientesDB = {};

export const resolvers = {
    Query: {
        getCliente: ({ id }) => {
            return new Cliente(id, clientesDB[id]);
        }        
    },
    Mutation: {
        crearCliente: (root, {input} ) => {

            /*
            const id = require('crypto').randomBytes(10).toString('hex');
            clientesDB[id] = input;
            return new Cliente(id, input);
            */

            const nuevoCliente = new Clientes({
                nombre: input.nombre,
                apellido: input.apellido,
                empresa: input.empresa,
                email: input.email,
                edad: input.edad,
                tipo: input.tipo,
                pedidos: input.pedidos
            });
            nuevoCliente.id = nuevoCliente._id;

            return new Promise((resolve, Object) => {
                nuevoCliente.save((error) => {
                    if(error) rejects(error)
                    else resolve(nuevoCliente)
                });
            });
        }
    }
}