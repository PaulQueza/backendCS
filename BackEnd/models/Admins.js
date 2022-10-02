import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  edad: Number,
  tipo: String,
  telefono: String,
  correo: String,
  nombreUsuario: String,
  contrasena: String,
});

// Convertir a modelo
const Nota = mongoose.model('Admin', notaSchema);
export default Nota;