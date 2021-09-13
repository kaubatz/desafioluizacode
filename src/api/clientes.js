const express = require('express');
const router = express.Router();
const { cliente, usuario } = require('../models');
const ClienteService = require('../services/clientes');
const UsuarioService = require('../services/usuarios');
const { body, check, validationResult } = require('express-validator');
const autenticacao = require('./functions');

const clienteService = new ClienteService(cliente);
const usuarioService = new UsuarioService(usuario);


router.get('/',autenticacao, async (req, res) => {    
  /*
    #swagger.tags = ['Clientes']
    #swagger.description = 'Endpoint parra obter uma lista de clientes' 

    #swagger.security = [{
      "apiKeyAuth": []
    }]
    
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Cliente"},
      description: 'Cliente encontrado'
    }
    #swagger.responses[404] = {
      description: 'Cliente não encontrado'
    }
    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
  */
    const clientes = await clienteService.get();
    res.status(200).json(clientes);
});

router.post(
    '/', 
    autenticacao, 
    //body('nome').not().isEmpty().trim().escape().withMessage('Nome obrigatório'),
    //body('cpf').not().isEmpty().trim().escape().withMessage('CPF obrigatório'),
    //check('cpf').not().isEmpty().matches(/\d/).withMessage('Somente números'),
    async (req, res) => {      
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({ errors: errors.array() });
      // }

      const { nome, cpf, endereco, email } = req.body;
      
      const usuario = req.body.nome;
      const email_usu = req.body.email;
      const senha = req.body.cpf;          
      const usuario_id = await usuarioService.adicionar({ usuario, email_usu, senha }); // senha inicial é o CPF
      console.log(usuario_id);

      try {

        await clienteService.adicionar({ nome, cpf, endereco, email, usuario_id});
        res.status(201).send('Cliente cadastrado com sucesso!');
      } catch (erro) {
        res.status(400).send(erro.message);
      }
    }
  );
  
module.exports = router;
