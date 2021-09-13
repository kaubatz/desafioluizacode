const express = require("express");
const router = express.Router()
const { usuario } = require('../models')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const JWTSecret = '::!Luiza<code>3::Squad-C::ENIACgirls!::'
const autenticacao = require('./functions');

router.get('/', autenticacao, async (req, res) => {
  /*
    #swagger.tags = ['Usuários']
    #swagger.description = 'Endpoint parra obter uma lista de usuários' 

    #swagger.security = [{
      "apiKeyAuth": []
    }]
    
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Usuario"},
      description: 'Usuario encontrado'
    }
    #swagger.responses[404] = {
      description: 'Usuario não encontrado'
    }
    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
  */
    const usuarios = await usuario.findAll();
    res.status(200).json(usuarios);
})

router.post('/', 
  async (req, res) => {
    const { nome, email, senha } = req.body
    try {
      await usuario.create({ nome, email, senha })
      res.status(201).send('Usuário criado com sucesso!')
    } catch(erro) {
      res.status(400).send('Algo eu errado')
    }
})

router.post('/login', 
  check('email')
    .not().isEmpty()
    .withMessage('Campo email é obrigatório!'),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, senha } = req.body
    const user = await usuario.findOne({
        where: {
          email: email
        }
      })

    if(user != undefined) {
        if(user.senha == senha) {
            jwt.sign({id: user.id, email: user.email},JWTSecret,{expiresIn: '48h'},(err, token) => {
                if(err){
                    res.status(400).json('Falha interna!')
                }else {
                    res.status(200).json({token: token})
                }
            })
        } else {
            res.status(401).send('Credenciais inválidas!')
        }
    } else {
        res.status(404).send('Email não cadastrado no banco')
    }
})

module.exports = router