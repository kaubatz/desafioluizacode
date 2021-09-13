const loja = (sequelize, DataTypes) => {
    const Loja = sequelize.define('Loja', {        
        cnpj: DataTypes.STRING(18),
        nome: DataTypes.STRING(100),
        endereco: DataTypes.STRING(200)
    }, { timestamps: false, tableName: 'loja' })

    Loja.associate = (models) => {
        Loja.hasMany(models.Compra, {as: 'compras'})
    };

    return Loja
}

module.exports = loja;