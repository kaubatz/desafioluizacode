const cliente = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        id: {
            type: DataTypes.INTEGER
        },
        nomeCompleto: {
            type: DataTypes.VARCHAR
        },
        cpf: {
            type: DataTypes.CHAR
        }, 
        endereco: {
            type: DataTypes.VARCHAR
        }
    }, {
        tablename: 'cliente'
    })
    return cliente
}

module.exports = cliente
