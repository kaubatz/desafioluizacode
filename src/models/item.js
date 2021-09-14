const item = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {         
        quantidade: DataTypes.INTEGER,            
        valorTotal: DataTypes.FLOAT        
    }, { tableName: 'item' })

    Item.associate = (models) => {
        Item.belongsTo(models.Compra, { 
            constraint: true,
            foreignKey: 'compra_id'
        });
        Item.belongsTo(models.Produto, { 
            constraint: true,
            foreignKey: 'produto_id'
        });
      };    

    return Item
}

module.exports = item;