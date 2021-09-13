class CompraService {
  constructor (CompraModel) {
    this.compra = CompraModel
  }

  async get () {
    const compras = await this.compra.findAll()
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