const express = require('express');
const router = express.Router()
const { produto } = require('../models')
const ProdutoService = require('../services/produtos')
//const { body, check, validationResult } = require('express-validator')
const autenticacao = require('./functions')

const produtoService = new ProdutoService(produto)

router.get('/', autenticacao, async (req, res) => {
    /*
      #swagger.tags = ['Produto']
      #swagger.description = 'Endpoint parra obter uma lista de produtos' 

      #swagger.security = [{
        "apiKeyAuth": []
      }]
      
      #swagger.responses[200] = {
        schema: { $ref: "#/definitions/Produto"},
        description: 'Produto encontrado'
      }
    */
    const produtos = await produtoService.get()
    res.status(200).json(produtos)
})

module.exports = router