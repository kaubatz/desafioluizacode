const loja = (sequelize, DataTypes) => {
    const Loja = sequelize.define(`Loja`, {
        ID: {
            type: DataTypes.INT,
            unique: false,
            allowNull: false
        },
        cnpj: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false  
        },
        endereco: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
         },{
             tableName: `loja`
         })

         return Loja
          }

          module.exports = loja 




