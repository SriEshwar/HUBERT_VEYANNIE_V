const productModel = require('../Models/Product.model');

exports.getProducts = async (req, res) => {
    try {
        const query = req.query.keyword?{ name: {
            $regex: req.query.keyword,
            $options: 'i'
        }}:{}
        const products = await productModel.find(query);
        res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching product:', error.message);
        res.status(404).json({ message: error.message });
    }
}

exports.getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Fetching product with ID: ${id}`);
        const product = await productModel.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error.message);
        res.status(404).json({ message: error.message });
    }
}