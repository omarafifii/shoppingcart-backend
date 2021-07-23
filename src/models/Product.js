const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    image: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
    },
    quantity: {
        type: Number,
    }    
})

productSchema.statics.getProducts = async () => {
    // Get products.
    try {
        const products = await Product.find({})
        return products
    } catch (error) {
        return error
    }
}

const Product = mongoose.model('Product', productSchema)

module.exports = Product