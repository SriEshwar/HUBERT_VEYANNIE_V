const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {type: String},
    price: {type: String},
    description: {type: String},
    ratings: {type: String},
    images:[{
        image: {type: String}
    }],
    category: {type: String},
    seller: {type: String},
    stock: {type: String}
})

const productModel = mongoose.model('Product', productSchema)
module.exports = productModel