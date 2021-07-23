const express = require('express')
const Product = require('../models/Product')
// const admin_auth = require('../middleware/admin_auth')
// const auth = require('../middleware/auth')

const router = express.Router()

router.get('/product', async (req, res) => {
    // get all products
    try {
        const products = await Product.getProducts()
        res.send({products})
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/product', async (req, res) => {
    // Create a new product
    try {
        const product = new Product(req.body)
        await product.save()
        const message = { message: "product created successfully" }
        res.status(201).send({ message, product})
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/product', async(req, res) => {
    //Edit product
    try {
        const product = await Product.findOneAndUpdate({_id:req.body._id}, req.body)
        res.send({ product })
    } catch (error) {
        res.status(500).send(error)
    }

})

router.delete('/product', async(req, res) => {
    // delete product
    try {
        const product = await Product.findOneAndDelete ({_id:req.query.id})
        res.send({message:'Product deleted successfully', product})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router