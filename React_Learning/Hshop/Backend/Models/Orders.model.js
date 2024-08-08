const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    cartItems: {type: Array},
    amount: {type: String},
    status: {type: String},
    createdAt: {type: Date}
})

const orderModel = mongoose.model('Order', orderSchema)
module.exports = orderModel