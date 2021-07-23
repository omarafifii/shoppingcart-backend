const express = require('express')
const Coupon = require('../models/Coupon')

const router = express.Router()

router.get('/coupon', async (req, res) => {
    // get all coupons
    try {
        const coupons = await Coupon.getCoupon()
        res.send({coupons})
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/coupon', async (req, res) => {
    // Create a new coupon
    try {
        const coupon = new Coupon(req.body)
        await coupon.save()
        const message = { message: "coupon created successfully" }
        res.status(201).send({ message, coupon})
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/coupon', async(req, res) => {
    //Edit coupon
    try {
        const coupon = await Coupon.findOneAndUpdate({code:req.body.code}, req.body)
        res.send({ coupon })
    } catch (error) {
        res.status(500).send(error)
    }

})

router.delete('/coupon', async(req, res) => {
    // delete coupon
    try {
        const coupon = await Coupon.findOneAndDelete ({code:req.query.code})
        res.send({message:'Coupon deleted successfully', coupon})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router