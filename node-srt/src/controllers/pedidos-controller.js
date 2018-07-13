'use strict'


const ValidationContract = require('../validators/fluent-validator');
const mongoose = require('mongoose');
const Pedidos = mongoose.model('Pedidos');
const guid = require('guid');

exports.get = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({},'number status')
        .populate('cadastro','name')
        .populate('items.product','title');
        return res.status(200).send(pedidos);
    } catch (e) {
        return res.status(400).send({error:' error listing request'});

    }
}


exports.getById= async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({cadastro:req.params.id})
        return res.status(200).send(pedidos);
    } catch (e) {
        return res.status(400).send({error:' error listing request'});

    }
}


exports.post = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.create(req.body);

        return res.status(200).send({ message: 'request successfully registered' })

    } catch (e) {

        return res.status(400).send({ error: 'error registering request' });
    }

}
