const express = require('express');
const router = express.Router ();
const { compra, item } = require('../models');
const CompraService = require('../services/compras');
const autenticacao = require ('./functions');

const compraService = new CompraService(compra);

router.get('/', autenticacao, async (req, res) => {
    /*
    #swagger.tags = ['Compras']
    #swagger.description = 'Endpoint parra obter uma lista de compras' 

    #swagger.security = [{
      "apiKeyAuth": []
    }]
    
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Compras"},
      description: 'Compra encontrada'
    }
    #swagger.responses[404] = {
      description: 'Compra não encontrada'
    }
    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
  */

    const compras = await compraService.get(); 
    // colocar o filtro de id do cliente, fazer o join dos produtos
    res.status(200).json(compras);
});

router.post (
    '/compra', 
    autenticacao, 
    //fazer validação    
    async (req, res) => {

        let id_compra;

        const novaCompra = await this.compra.findOne({
            where: {
              cliente_id: req.body.cliente_id,
              status: 'EM ANDAMENTO'
            }
          })

        if (novaCompra == null) {
            try{
                id_compra = await compra.create({
                    loja_id: req.body.idLoja, 
                    cliente_id: req.bosy.idCliente, 
                    data: req.body.data, 
                    valorTotal: req.body.valor_total, 
                    pagamento: req.body.pagamento, 
                    status: req.body.status
                });
                res.status(201).send('compra criada com sucesso');
            }catch(erro){
                res.status(400).send('erro ao cadastrar compra');
            }
          } else {
              id_compra = novaCompra.id_compra;
          }

        await item.create({
            compra_id: id_compra,
            produto_id: req.body.id_prod
        });    
});

module.exports = router; 