const produto = (sequelize, DataTypes) => {
  const produto = sequelize.define('Produto', {
      id: {
          type: DataTypes.INTEGER
      },
      nome: {
          type: DataTypes.VARCHAR
      },
      marca: {
          type: DataTypes.CHAR
      },
      categoria: { 
          type: DataTypes.VARCHAR
      }, 
      preco: {
          type: DataTypes.FLOAT
      }
  }, {
      tablename: 'cliente'
  })
  return produto
}

module.exports = produto