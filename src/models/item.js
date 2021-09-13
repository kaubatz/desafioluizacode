const item = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        compra_id: DataTypes.INTEGER,            
        produto_id: DataTypes.INTEGER,            
        quantidade: DataTypes.INTEGER,            
        valorTotal: DataTypes.FLOAT        
    }, { timestamps: false, tableName: 'item' })

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