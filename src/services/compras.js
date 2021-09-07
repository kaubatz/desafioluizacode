class CompraService {
    constructor (CompraModel) {
      this.compra = CompraModel
    }
  
    async get () {
      const compras = await this.compra.findAll()
      return compras
    }
  
    async adicionar (compraDTO) {
      // verificar se já existe uma compra 
      const compra = await this.compra.findOne({
        where: {
          idCompra: compraDTO.idCompra
        }
      })
      if (compra != null) {
        throw new Error('Já existe uma compra cadastrada!')
      }
      try {
        await this.compra.create(compraDTO)
      } catch (erro) {
        console.erro(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = CompraService