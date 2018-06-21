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

exports.post = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.create({
            cadastro: req.body.cadastro,
            number: guid.raw().substring(0,6),
            items:req.body.items
        });
        return res.status(200).send({ message: 'request successfully registered' })

    } catch (e) {

        return res.status(400).send({ error: 'error registering request' });
    }

}
