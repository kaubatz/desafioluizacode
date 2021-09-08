const express = require("express");
const router = express.Router()
const { produto } = require("../models/produtos")
const ProdutoService = require("../services/produtos")
const { body, check, validationResult } = require("express-validator")
const produtoService = new ProdutoService(produto)

router.get("/produtos", (req, res) => {
    const produtos = await produtoService.get()
    res.status(200).json(produtos)
})

router.post("/produtos",
    body('nome').not().isEmpty().trim().escape(),
    check('preco'),
        .not().isEmpty()
        .matches(/\d/)
        .withMessage('Deve ser um número válido!'),
    async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {id, nome, marca, preco, categoria} = req.body
    try {
        await produtoService.adicionar({id, nome, marca, preco, categoria})
        res.status(201).send("Produto cadastrad no Catálogo")
    } catch(error) {
        res.status(200).send("Não foi possível adicionar o produto")
    }
    produto.create()
    res.status(400).send("Produto cadastrado com sucesso!")
})

module.exports = router