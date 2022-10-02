import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  marca: String,
  tipo: String,
  imagen: String,
  precio: { type: Number,required: [true, 'Nombre obligatorio']},
  sexo: String,
  color: String,
  visible: Boolean,
  stock:[
    {
      talla: {type: String, require:'ERROR talla'},
      cantidad:{type: Number, require:'ERROR cantidad'}
    },
  ]
});

// Convertir a modelo
const Nota = mongoose.model('Productos', notaSchema);

export default Nota;