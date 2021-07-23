const mongoose = require('mongoose')


const couponSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['percent','fixed'],
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
})

couponSchema.statics.getCoupon = async (myCode) => {
    // Get coupons
    const coupon = await Coupon.find({code: myCode})
    return coupon
}

const Coupon = mongoose.model('Coupon', couponSchema)

module.exports = Coupon