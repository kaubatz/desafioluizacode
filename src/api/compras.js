const express = require("express");
const router = express.Router();
const { compra, item, produto } = require("../models");
const CompraService = require("../services/compras");
const autenticacao = require("./functions");

const compraService = new CompraService(compra);

router.get("/:id", autenticacao, async (req, res) => {
  /*
      #swagger.tags = ['Compra']
      #swagger.description = 'Endpoint para obter uma lista de compras à partir do id de um Cliente' 

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
  const compras = await compraService.get(req.params.id);
  res.status(200).json(compras);
});

router.post("/",autenticacao, async (req, res) => {
  /*
      #swagger.tags = ['Compra']
      #swagger.description = 'Endpoint para incluir uma nova compra' 

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

  // busca categoria e valor do produto
  let prodDados = await produto.findOne({
    attributes: ['categoria', 'preco'],        
    where: { id: req.body.ProdutoId }
  });
  
  // verifica se já existe produto no carrinho
  const novaCompra = await compra.findOne({
    where: {
      ClienteId: req.body.ClienteId,
      status: "EM ANDAMENTO",
    },
  });

  //a compra existe, pega o id dela
  if (novaCompra != null) {
    id_compra = novaCompra.id;     
    
    // seleciona nos itens da compra se já existe outro produto da mesma categoria
    let prod1 = await item.findOne({
      include: [
          {
              model: produto,
              attributes: ['nome'],
              where: { categoria: prodDados.categoria}
          }
      ],
      where: { CompraId: id_compra}//, categoria: prodDados.categoria  }
    });

    if (prod1 != null ){
      res.status(400).send(`Já existe outro produto da categoria ${prodDados.categoria} no carrinho.`);
    } //fim da verificação de categoria
    else {
      try {
        await item.create({
          quantidade: 1,
          valorTotal: prodDados.preco,
          CompraId: id_compra,
          ProdutoId: req.body.ProdutoId,
        });

        res.status(201).send("Item adicionado ao carrinho");
      } catch (erro) {
        res.status(400).send(erro);
      }
    } 
  }     
  else {
    try {
      let id_compra = await compra.create({
        //data: req.body.data,
        valorTotal: req.body.valor_total,
        pagamento: req.body.pagamento,
        //status: '',
        LojaId: req.body.LojaId,
        ClienteId: req.body.ClienteId,
      });

      await item.create({
        quantidade: 1,
        valorTotal: prodDados.preco,
        CompraId: id_compra.id,
        ProdutoId: req.body.ProdutoId,
      });

      res.status(201).send("compra criada com sucesso");
    } catch (erro) {
      res.status(400).send(erro);
    }
  } 
}  
);

router.delete('/:cli/:prod', autenticacao, async(req, res) => {
  const compras = await compra.findOne({
    where: {
      ClienteId: req.params.cli,
      status: "EM ANDAMENTO",
    },
  });

  if (compras == null) {
    res.status(404).send('O carrinho está vazio')
  } else {
    const itemCompra = await item.findOne({
      where: {
        CompraId: compras.id,
        ProdutoId: req.params.prod
      },
    });

    if (itemCompra == null){
      res.status(404).send('O item não está no carrinho')
    } else {
      await item.destroy({
        where: {
          id: itemCompra.id
        }
      });

      res.status(200).send('Produto excluído') 
    }
  }

})

router.put('/finalizar', autenticacao, async(req, res) => {
  try{
    await compra.update({status: 'EM ANDAMENTO'}, {
      where: { id: req.body.idCompra }
    });

    res.status(200).send('Compra finalizada')
  } catch {
    res.status(400).send('Não foi possível finalizar a compra')
  }  
});

router.put('/retirar', autenticacao, async(req, res) => {

  try{
    await compra.update({status: 'RETIRADO'}, {
      where: { id: req.body.idCompra }
    });

    res.status(200).send('Produtos retirados')
  } catch {
    res.status(400).send('Não foi possível atualizar o status')
  }
})


module.exports = router;