import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthContext';

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [quantity, setQty] = useState(1);
    const { id } = useParams();
    const { user, cartItems, setCartItems } = useContext(AuthContext); // Use AuthContext

    useEffect(() => {
        fetch('http://localhost:8000/product/' + id)
            .then(res => res.json())
            .then(res => setProduct(res));
    }, [id]);

    function addToCart() {
        if (!user) {
            toast.error("You need to be logged in to add items to the cart.");
            return;
        }

        if (!cartItems) {
            console.error("cartItems is undefined");
            return;
        }

        const existingItem = cartItems.find((item) => item.product._id === product._id);
        if (!existingItem) {
            const newItem = { product, quantity };
            setCartItems((state) => [...state, newItem]);
            toast.success("Added successfully");
        }
    }

    return (
        product && (
            <div className="container container-fluid">
                <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="product_image">
                        <img src={product.images[0].image} alt={product.name} height="500" width="500" />
                    </div>
                    <div className="col-12 col-lg-5 mt-5">
                        <h3>{product.name}</h3>
                        <p id="product_id">Product # {product._id}</p>
                        <hr />
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
                        </div>
                        <hr />
                        <p id="product_price">${product.price}</p>
                        
                        <button type="button" id="cart_btn" onClick={addToCart} disabled={product.stock === 0} className="btn btn-primary d-inline ml-4">Add to Cart</button>
                        <hr />
                        <p>Status: <span id="stock_status" className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock > 0 ? 'In Stock' : 'Out of stock'}</span></p>
                        <hr />
                        <h4 className="mt-2">Description:</h4>
                        <p>{product.description}</p>
                        <hr />
                        <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
                        <div className="rating w-50"></div>
                    </div>
                </div>
            </div>
        )
    );
}
