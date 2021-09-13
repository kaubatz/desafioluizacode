const produto = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: DataTypes.STRING(100),
        marca: DataTypes.STRING(100),
        categoria: DataTypes.STRING(100),
        preco: DataTypes.DOUBLE
    }, { timestamps: false, tableName: 'produto' })
    
    return Produto
  }
  
  module.exports = produto;