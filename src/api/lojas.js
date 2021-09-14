const express = require('express');
const router = express.Router();
const { loja } = require('../models');
const LojaService = require('../services/lojas');
//const { body, check, validationResult } = require('express-validator');
const autenticacao = require('./functions');

const lojaService = new LojaService(loja);

router.get('/', autenticacao, async (req, res) => {
  /*
    #swagger.tags = ['Loja']
    #swagger.description = 'Endpoint para obter uma lista de lojas' 

    #swagger.security = [{
      "apiKeyAuth": []
    }]
    
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Loja"},
      description: 'Lojas encontradas'
    }
  */
  const lojas = await lojaService.get();
  res.status(200).json(lojas);
})

module.exports = router;