const { NOW, Sequelize } = require("sequelize");

const compra = (sequelize, DataTypes) => {
    const Compra = sequelize.define('Compra', {
        data: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        valorTotal: DataTypes.FLOAT,
        pagamento: DataTypes.STRING(15), //dinheiro, crédito, débito, boleto
        status: { type: DataTypes.STRING(25), 
                  defaultValue: 'EM ANDAMENTO' } //em andamento, finalizada, entregue
    }, { tableName: 'compra' })

    Compra.associate = (models) => {
        Compra.hasMany(models.Item,
          { foreignKey: 'compra_id'});
        Compra.belongsTo(models.Loja,
          { foreignKey: 'loja_id'});
        Compra.belongsTo(models.Cliente,
          { foreignKey: 'cliente_id'});
      };

    return Compra
}

module.exports = compra;