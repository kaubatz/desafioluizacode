const {cliente, item, produto} = require('../models')
class CompraService {
  constructor (CompraModel) {
    this.compra = CompraModel
  }

  async get (idCliente) {
    // const compras = await this.compra.findAll({
    //   where: { ClienteId: idCliente } 
    // })


    const compras = await this.compra.findAll({
      //attributes: ['colaboradorId', 'nome'],
      include: [
          {
              model: cliente,
              //attributes: ['id']
          },
          {
            model: item,
            //attributes: ['id']
            include: [{model: produto}]
          }
        ],
      where: { ClienteId: idCliente  }
  });

    return compras
  }

  async cadastrar (compraDTO) {
        
    try {
      await this.compra.create(compraDTO)
    } catch (erro) {
      console.erro(erro.message)
      throw erro
    }
  }
}
      
module.exports = CompraService