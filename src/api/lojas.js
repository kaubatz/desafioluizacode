const express = require("express");
const router = express.Router();
const { loja } = require('../models');
const lojaServico = require('../services/loja');
const { body, check, validationResult } = require('express-validator');

const servicoLoja = new lojaServico(loja);

router.get('/', async (req, res) => {
  const lojas = await servicoLoja.get()
  res.status(200).json(lojas);
})

module.exports = router;