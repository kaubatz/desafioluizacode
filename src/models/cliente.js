const cliente = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        nome: DataTypes.STRING(100),
        cpf: DataTypes.STRING(11),
        endereco: DataTypes.STRING(150),
        email: DataTypes.STRING(150),
        usuario_id: DataTypes.INTEGER
    }, { timestamps: false, tableName: 'cliente' })
    
    Cliente.associate = (models) => {
        Cliente.belongsTo(models.Usuario, { 
            constraint: true,
            foreignKey: 'usuario_id'
        });   
      }; 
    return Cliente
}

module.exports = cliente;