class ClienteService {
    constructor (ClienteModel) {
      this.cliente = ClienteModel
    }
  
    async get () {
      const clientes = await this.cliente.findAll()
      return clientes
    }
  
    async adicionar (clienteDTO) {
      // verifica se já existe cliente cadastrado
      const cliente = await this.cliente.findOne({
        where: {
          cpf: clienteDTO
        }
      })
      if (cliente != null) {
        throw new Error('CPF já cadastrado')
      }
      try {
        await this.cliente.create(clienteDTO)
      } catch (erro) {
        console.erro(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = ClienteService
  