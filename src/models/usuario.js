const usuario = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      nome: DataTypes.STRING(100),
      email: DataTypes.STRING(200),
      senha: DataTypes.STRING
    }, { timestamps: false, tableName: 'usuario' })
  
    return Usuario
  }

  module.exports = usuario;