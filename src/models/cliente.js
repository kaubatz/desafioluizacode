const cliente = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        nome: DataTypes.STRING(100),
        cpf: DataTypes.STRING(11),
        endereco: DataTypes.STRING(150),
        email: DataTypes.STRING(150)
    }, { tableName: 'cliente' })
    
    return Cliente
}


module.exports = cliente;