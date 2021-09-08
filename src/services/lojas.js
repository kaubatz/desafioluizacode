class lojaServico {
    constructor (opcaoLoja) {
      this.loja = opcaoLoja
    }
  
    async get () {
      const lojas = await this.loja.findAll()
      return lojas
    }
  
  }
  
  module.exports = lojaServico