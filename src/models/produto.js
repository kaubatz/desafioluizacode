const produto = (sequelize, DataTypes) => {
  const produto = sequelize.define('Produto', {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
      nome: {
          type: DataTypes.VARCHAR
      },
      marca: {
          type: DataTypes.VARCHAR
      },
      categoria: { 
          type: DataTypes.VARCHAR
      }, 
      preco: {
          type: DataTypes.FLOAT
      }
  }, {
      tablename: 'produto'
  })
  return produto
}

module.exports = produto