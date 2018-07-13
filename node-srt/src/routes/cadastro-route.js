'user strict'


const express = require('express');
const router = express.Router();
const controller= require('../controllers/cadastro-controller');

router.get('/', controller.get); 
router.get('/:id',controller.getById);
router.post('/registro', controller.post); 
router.put('/:id', controller.put); 

module.exports = router;    