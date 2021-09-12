const express = require('express');
const router = express.Router ();
const { compra } = require('../models');
const CompraService = require('../services/compras');
const autenticacao = require ('./functions');

const compraService = new CompraService(compra);

router.get('/', autenticacao, async (req, res) => {
    const compras = await compraService.get(); 
    // colocar o filtro de id do cliente, fazer o join dos produtos
    res.status(200).json(compras);
});

router.post (
    '/compra', 
    autenticacao, 
    //fazer validação    
    async (req, res) => {
    const { idLoja, idCliente, data, valorTotal, pagamento, status } = req.body;
    try{
        await compra.create({idLoja, idCliente, data, valorTotal, pagamento, status});
        res.status(201).send('compra criada com sucesso');
    }catch(erro){
        res.status(400).send('erro ao cadastrar compra');
    }
});

module.exports = router;


