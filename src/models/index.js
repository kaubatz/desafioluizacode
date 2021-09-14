const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Loja = require('./loja');
const Produto = require('./produto');
const Cliente = require('./cliente');
const Compra = require('./compra');
const Item = require('./item');
const Usuario = require('./usuario');

const loja = Loja(sequelize, Sequelize.DataTypes);
const produto = Produto(sequelize, Sequelize.DataTypes);
const cliente = Cliente(sequelize, Sequelize.DataTypes);
const compra = Compra(sequelize, Sequelize.DataTypes);
const item = Item(sequelize, Sequelize.DataTypes);
const usuario = Usuario(sequelize, Sequelize.DataTypes);

compra.belongsTo(loja);
compra.belongsTo(cliente);
compra.hasMany(item);
item.belongsTo(compra);
item.belongsTo(produto);

const db = {
    loja,
    produto,
    cliente,
    compra,
    item,
    usuario,
    sequelize
}

module.exports = db