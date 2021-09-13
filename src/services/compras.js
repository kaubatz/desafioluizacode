const express = require("express");
const router = express.Router();
const { compra } = require("../models");

const compraService = new CompraService(compra);
  
    async get () {
      const compras = await this.compra.findAll()
      return compras
    }
  
    async cadastrar (compraDTO) {
      const {idCompra} = req.params;
      const compra = { data, valor_total, pagamento, status } = req.body;

      const compra = await compra.create({
        where: {
          data: compraDTO.data,
          valor_total: compraDTO.valor_total,
          pagamento: compraDTO.pagamento,
          status: compraDTO.status
        }
      })
      if (compra != null) {
        throw new Error('Já existe uma compra cadastrada!')
      }
      try {
        await this.compra.create(compraDTO)
      } catch (erro) {
        console.erro(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = CompraService