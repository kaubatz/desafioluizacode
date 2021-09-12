const loja = (sequelize, DataTypes) => {
    const Loja = sequelize.define('Loja', {        
        cnpj: {
            type: DataTypes.STRING(18),
            unique: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
    }, {
        tableName: 'loja'
    })

    return Loja
}

module.exports = loja