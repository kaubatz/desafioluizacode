const express = require("express");
const router = express.Router ();
const { compras } = require(`../models`);
const ComprasService = require(`../services/compras`);
const auth = require ("./functions");

const comprasService = new ComprasService(compras);

router.post ("/compra" ,auth, async (req, res) => {
    const {idCliente, idLoja, data, itens, valorTotal, pagamento, status} = req.body;
    try{
        await compra.create ({idCliente, idLoja, data, itens, valorTotal, pagamento, status});
        res.status(201).send("compra criada com sucesso");

    }catch(erro){
        res.status(400).send("erro ao cadastrar compra");
        
    }
});



router.put("/",auth,async (req, res) => {
   // const compras = await comprasService.put();
    //res.status(200).json(compras);
});

router.put ("/", auth, async (req, res) => {

});

router.put("/",auth, async (req, res) => {

});

router.put("/", auth, async (req, res) => {

})

router.get("/", auth, async (req, res) => {
    const compra = await comprasService.get();
    res.status(200).json(compra);
});


//router.get("/",auth, async (req, res) => {
    //const { idCompra }= req.params

    //try {
        //const compra = await comprasService.findById(idCompra).populate({ id: idCompra})
            //return res.status(200).json(compra)

             //}catch(error){
                // return res.status(400).json(error)
             //}
   // })

module.exports = router;