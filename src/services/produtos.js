class ProdutoService {
    constructor (ProdutoModel) {
      this.produto = ProdutoModel
    }
  
    async get () {
      const produtos = await this.produto.findAll()
      return produtos
    }
  
    async adicionar (produtoMagalu) {
      // verifica se existe produto com o mesmo nome
      const produto = await this.produto.findOne({
        where: {
          nome: produtoMagalu.nome
        }
      })
      if (produto != null) {
        throw new Error("Existe um produto cadastrado com esse nome!")
      }
      try {
        await this.produto.create(produtoMagalu)
      } catch (erro) {
        console.erro(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = ProdutoService