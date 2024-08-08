const orderModel = require('../Models/Orders.model')
const productModel = require('../Models/Product.model')

//Create order
exports.createOrder = async(req, res) =>{
    const cartItems = req.body
    const amount = Number(cartItems.reduce((acc,item)=> (
        acc + item.product.price * item.quantity
    ),0)).toFixed(2)

    // updating product stock
    cartItems.forEach(async (item) => {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.quantity;
        await product.save()
    });


    try {
        const order = await orderModel.create({cartItems, amount})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}