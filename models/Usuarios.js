import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  edad: {type: String, required: [true, 'Nombre obligatorio']},
  telefono: String,
  correo: String,
  nombreUsuario: String,
  contrasena: { type: String,required: [true, 'Nombre obligatorio']},
  direccion: String
});

// Convertir a modelo
const Nota = mongoose.model('Usuarios', notaSchema);

export default Nota;