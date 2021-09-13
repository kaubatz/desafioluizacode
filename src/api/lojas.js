const express = require('express');
const router = express.Router();
const { loja } = require('../models');
const LojaService = require('../services/lojas');
//const { body, check, validationResult } = require('express-validator');
const autenticacao = require('./functions');

const lojaService = new LojaService(loja);

router.get('/', autenticacao, async (req, res) => {
  /*
    #swagger.tags = ['Lojas']
    #swagger.description = 'Endpoint parra obter uma lista de lojas' 

    #swagger.security = [{
      "apiKeyAuth": []
    }]
    
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Loja"},
      description: 'Loja encontrada'
    }
    #swagger.responses[404] = {
      description: 'Loja não encontrada'
    }
    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
  */
  const lojas = await lojaService.get();
  res.status(200).json(lojas);
})

module.exports = router;