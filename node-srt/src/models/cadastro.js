
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },

    sexo: {
        type: String,
        required: true
    },

    dtn:{
        type:Date,
        required:true
    },

    cpf:{
        type:String,
        required:true
    },

    endereco:{
        type:String,
        required:true
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

});
/*schema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash+ global.SALT_KEY;
    next();
})*/

module.exports = mongoose.model('Cadastro', schema);