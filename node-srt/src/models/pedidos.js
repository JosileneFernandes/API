
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    cadastro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cadastro'
    },

    number: {
        type: String,
        required: true
    },

    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },

    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },

    items: [{

        quatity: {
            type: Number,
            require: true,
            default: 1
        },

        price: {
            type: Number,
            require: true
        },

        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },

    }],

    valorFrete: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Pedidos', schema);