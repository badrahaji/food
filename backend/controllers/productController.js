const productController = require("express").Router()
const Product = require("../models/Product")
const {verifyToken, verifyTokenAdmin} = require('../middlewares/verifyToken')

// get all restaurents products
productController.get('/', async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching the products." });
    }
  });
// get all patesserie products
productController.get('/', async (req, res) => {
  try {
    const products = await Product.find({type : "sucre"});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the products." });
  }
});
// get one
productController.get('/find/:id', verifyToken, async(req, res) => {
   try {
    const productId = req.params.id
    const product = await Product.findById(productId)
    if(!product){
        return res.status(500).json({msg: "No product with such id!"})
    }
    return res.status(200).json(product)
   } catch (error) {
    console.error(error)
   }
})
// create product
productController.post('/', verifyTokenAdmin, async(req, res) => {
    try {
        const newProduct = await Product.create({...req.body})
        return res.status(201).json(newProduct)
    } catch (error) {
        console.error(error)
    }
})

module.exports = productController