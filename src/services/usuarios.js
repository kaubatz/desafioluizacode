class UsuarioService {
    constructor (UsuarioModel) {
      this.usuario = UsuarioModel
    }
  
    async get () {
      const usuarios = await this.usuario.findAll()
      return usuarios
    }
  
    async adicionar (usuarioDTO) {
      // verifica se já existe produto com o mesmo nome
      // const usuario = await this.usuario.findOne({
      //   where: {
      //     email: usuarioDTO.email
      //   }
      // })
      // if (usuario != null) {
      //   throw new Error('Email já cadastrado')
      // }
      try {
        await this.usuario.create(usuarioDTO)
      } catch (erro) {
        console.erro(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = UsuarioService
  