
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    cadastro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cadastro'
    },

    valor: {
        type: Number,
        required: true
    },
            
    nomeProduto:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Pedidos', schema);