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

// Get busqueda de algun producto en la base de datos
router.get('/Productos-Buscar/:buscar', async(req, res) => {
  try{
    const buscar = req.params.buscar;
    const zapatilla = await Productos.find();
    const zapatillasBuscar = zapatilla.filter(zapatilla => zapatilla.nombre===buscar);
    res.json(zapatillasBuscar);
  }catch(error){
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get, obtiene todos los productos segun su tipo 
router.get('/Productos-FilterTipo/:tipo', async(req, res) => {
  try{
    const tipo = req.params.tipo;
    const zapatilla = await Productos.find();
    const zapatillasFiltroTipo = zapatilla.filter(zapatilla => zapatilla.tipo===tipo);
    res.json(zapatillasFiltroTipo);
  }catch(error){
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get, obtiene todos los productos dentro de un rango de precio 
router.get('/Productos-FilterPrecio/:precio', async(req, res) => {
  try{
    const precioIngresado = req.params.precio;
    const precio = parseFloat(precioIngresado)
    const zapatilla = await Productos.find();
    const zapatillasFiltroPrecio = zapatilla.filter(zapatilla => zapatilla.precio<precio);
    res.json(zapatillasFiltroPrecio);
  }catch(error){
    return res.status(400).json({
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

/*************** POST ********************/ 
// Agregar una nota
router.post('/Nuevo-Producto', async(req, res) => {
  const body = req.body;  
  try {
    const notaDB = await Productos.create(body);
    console.log("Producto creado")
    res.status(200).json(notaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

/*************** Eliminar ********************/ 
router.delete('/Producto-el/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const productoEliminar = await Productos.findByIdAndDelete({_id});
    if(!productoEliminar){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    console.log("SE BORRO EL PRODUCTO")
    res.json(productoEliminar);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

/*************** Actualizar ********************/ 
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
