const compra = (sequelize, DataTypes) => {
    const Compra = sequelize.define('Compra', {
        idCompra: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        idCliente: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            foreignKey: true
        },
        data: {
            type: DataTypes.DATE,
        },
        itens:{
            type: DataTypes.INTEGER,
        },
        valor_total: {
            type: DataTypes.FLOAT,
        }, 
        pagamento: {
            type: DataTypes.STRING,
        }, 
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'compra'
    })

    return Compra
}

module.exports = compra