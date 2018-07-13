'use strict'


const ValidationContract = require('../validators/fluent-validator');
const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');


exports.get = async(req, res, next) => {

    try {

        const cadastro = await Cadastro.find({
            
        },'email password nome');

        return res.status(200).send(cadastro);

    } catch (e) {

        
        return res.status(400).send({error:' error listing clients'});

    }

}


exports.getById = async(req, res, next) => {

    try {

        const cadastro = await Cadastro.findById(req.params.id);

        return res.status(200).send(cadastro);

    } catch (e) {

        
        return res.status(400).send({error:' error listing clients'});

    }

}


exports.post = async (req, res, next) => {

    const { email } = req.body;

    try {
        if (await Cadastro.findOne({ email })) {
            return res.status(400).send({ error: 'user already exist' });
        }

        const cadastro = await Cadastro.create(req.body);

        res.status(201).send({ message: 'user successfully registered' });

    } catch (e) {

        res.status(500).send({ message: 'it was not possible to register the user' });
    }
};


exports.put = async (req, res, next) => {

    try {
        const cadastro = await Cadastro.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                password: req.body.password,
            }
        });

        return res.status(200).send({ message: 'user updated successfully' });
    } catch (e) {
        return res.status(400).send({ error: 'error updated user' });

    }

};


