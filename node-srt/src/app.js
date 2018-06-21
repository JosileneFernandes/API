
'user strict'

const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require ('mongoose');


const app = express();
const router = express.Router();    

// connecta ao banco
mongoose.connect('mongodb://Cleiton:cl84424671@ds147390.mlab.com:47390/nodelojaroupa');


//carrega models
const Product =require('./models/product');
const Cadastro = require('./models/cadastro');
const Pedido = require('./models/pedidos');



//carega a Rotas
const indexRoute= require('./routes/index-route'); 
const productRoute= require('./routes/product-route'); 
const cadastroRoute = require('./routes/cadastro-route');
const pedidoRoute = require('./routes/pedidos-route');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ 
    extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/cadastro',cadastroRoute);
app.use('/pedido',pedidoRoute);
module.exports = app;