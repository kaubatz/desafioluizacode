const express = require("express");
const router = express.Router();
const { compra } = require("../models");
const CompraService = require("../service/compra");
const auth = require("./functions");

const compraService = new CompraService(compra);



router.put("/compra", auth, async (req, res) => {
    //const compra = await compraService.put();
    //res.status(200).json(compra);
});

router.put("/", auth, async (req, res) => {

});

router.put("/", auth, async (req,res) => {

});

router.put("/", auth, async (req, res) => {

});

router.get("/", auth, async (req, res) => {
    const compra = await compraService.get();
    res.status(200).json(compra);
});


router.get("/", auth, async (req, res) => {
    const { idCompra } = req.params 

    try {
        const compra = await compraService.findById(idCompra).populate({id: idProduto}).populate({id: idcliente})
        return res.status(200).json(compra)
    
    }catch(error){
        return res.status(400).json(error)
    }
})

module.exports = router;
