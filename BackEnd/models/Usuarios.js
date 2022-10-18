import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  edad: String,
  telefono: String,
  correo: { type: String,required: [true, 'Nombre obligatorio']},
  nombreUsuario: { type: String,required: [true, 'Nombre obligatorio']},
  contrasena: { type: String,required: [true, 'Nombre obligatorio']},
  direccion: String,
  region: String,
  ciudad: String,
  nombre: String
});

// Convertir a modelo
const Nota = mongoose.model('Usuarios', notaSchema);

export default Nota;