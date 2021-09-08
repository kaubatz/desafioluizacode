const express = require('express');
const router = express.Router();

const lojasRouter = require('./lojas');
const produtosRouter = require('./produtos');
const clientesRouter = require('./clientes');
const comprasRouter = require('./compras');
const usuariosRouter = require('./usuarios');

router.use('/lojas', lojasRouter);
router.use('/produtos', produtosRouter);
router.use('/clientes', clientesRouter);
router.use('/compras', comprasRouter);
router.use('/usuarios', usuariosRouter);

module.exports = router;