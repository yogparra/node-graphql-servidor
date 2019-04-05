import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

//Docker
//mongoose.connect('mongodb://localhost:27018/cliente' ,{useNewUrlParser: true} );

//Local
mongoose.connect('mongodb://localhost:27017/cliente' ,{useNewUrlParser: true} );

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    email: String,
    edad: Number,
    tipo: String,
    pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);
export { Clientes };