import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexion a DB
const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/myapp';

// Conexion en la nube
const uri = 'mongodb+srv://ezneaker:Contru2022@cluster0.h6spraj.mongodb.net/EZ';
const options = {
  useNewUrlParser: true,  useUnifiedTopology: true
}

mongoose.connect(uri, options).then(
  () => { console.log('Conectado a mongoDB'); },
  err => { err }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api', require('./routes/Usuarios'));
app.use('/api', require('./routes/Productos'));
app.use('/api', require('./routes/Admins'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});