const cliente = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        nomeCompleto: {
            type: DataTypes.STRING(100)
        },
        cpf: {
            type: DataTypes.STRING(11)
        }, 
        endereco: {
            type: DataTypes.STRING(150)
        }
    }, {
        tablename: 'cliente'
    })
    return cliente
}

module.exports = cliente
