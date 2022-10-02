import express from 'express';
const router = express.Router();
// importar el modelo lod productos
import Productos from '../models/Productos';

/*************** GET ********************/ 
// Get con parámetros
router.get('/Productos/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const notaDB = await Productos.findOne({_id});
    res.json(notaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get filter solo mostrar zapatillas para mujeres
router.get('/Productos-F', async(req, res) => {
  try {
    const zapatilla = await Productos.find();
    const zapatillasF = zapatilla.filter(zapatilla => zapatilla.sexo==='F');
    res.json(zapatillasF);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get filter solo mostrar zapatillas para hombres
router.get('/Productos-M', async(req, res) => {
  try {
    const zapatilla = await Productos.find();
    const zapatillasM = zapatilla.filter(zapatilla => zapatilla.sexo==='M');
    res.json(zapatillasM);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get filter solo mostrar zapatillas para hombres
router.get('/Productos-Adidas', async(req, res) => {
  try {
    const zapatilla = await Productos.find();
    const zapatillasM = zapatilla.filter(zapatilla => zapatilla.marca==='Adidas');
    res.json(zapatillasM);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Get filter solo mostrar zapatillas para hombres
router.get('/Productos-Nike', async(req, res) => {
  try {
    const zapatilla = await Productos.find();
    const zapatillasM = zapatilla.filter(zapatilla => zapatilla.marca==='Nike');
    res.json(zapatillasM);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Get filter solo mostrar zapatillas para hombres
router.get('/Productos-Puma', async(req, res) => {
  try {
    const zapatilla = await Productos.find();
    const zapatillasM = zapatilla.filter(zapatilla => zapatilla.marca==='Puma');
    res.json(zapatillasM);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Get filter solo mostrar zapatillas para hombres
router.get('/Productos-Fila', async(req, res) => {
  try {
    const zapatilla = await Productos.find();
    const zapatillasM = zapatilla.filter(zapatilla => zapatilla.marca==='Fila');
    res.json(zapatillasM);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
/*************** POST ********************/ 
// Agregar una nota
router.post('/Nuevo-Producto', async(req, res) => {
  const body = req.body;  
  try {
    const notaDB = await Productos.create(body);
    res.status(200).json(notaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


// Get con todos los documentos
router.get('/EZ-Producto', async(req, res) => {
  try {
    const zapatillas = await Productos.find();
    res.json(zapatillas);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar una nota
router.delete('/Producto-el/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const notaDb = await Productos.findByIdAndDelete({_id});
    if(!notaDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(notaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar una nota
router.put('/Producto-ac/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const notaDb = await Productos.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(notaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportación de router
module.exports = router;