import React, { Fragment, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthContext';

export default function Cart() {
    const { cartItems, setCartItems } = useContext(AuthContext); // Use AuthContext
    const [complete, setComplete] = useState(false);

    function increaseQty(item) {
        if (item.product.stock === item.quantity) {
            return;
        }
        const updatedItems = cartItems.map((i) => {
            if (i.product._id === item.product._id) {
                i.quantity++;
            }
            return i;
        });
        setCartItems(updatedItems);
    }

    function decreaseQty(item) {
        if (item.quantity > 1) {
            const updatedItems = cartItems.map((i) => {
                if (i.product._id === item.product._id) {
                    i.quantity--;
                }
                return i;
            });
            setCartItems(updatedItems);
        }
    }

    function deleteItem(item) {
        const updatedItems = cartItems.filter((i) => i.product._id !== item.product._id);
        setCartItems(updatedItems);
    }

    function orderHandler() {
        fetch('http://localhost:8000/order', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(cartItems),
        }).then(() => {
            setCartItems([]);
            setComplete(true);
            toast.success("Order placed!");
        });
    }

    return (
        <div className="flex-grow-1">
            {cartItems && cartItems.length > 0 ? (
                <Fragment>
                    <div className="container container-fluid">
                        <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>

                        <div className="row d-flex justify-content-between">
                            <div className="col-12 col-lg-8">
                                {cartItems.map((item) => (
                                    <Fragment key={item.product._id}>
                                        <hr />
                                        <div className="cart-item">
                                            <div className="row">
                                                <div className="col-4 col-lg-3">
                                                    <img
                                                        src={item.product.images[0].image}
                                                        alt={item.product.name}
                                                        className='img-fluid'
                                                        height="90"
                                                        width="115"
                                                    />
                                                </div>

                                                <div className="col-5 col-lg-3">
                                                    <p>{item.product.name}</p>
                                                </div>

                                                <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                    <p id="card_item_price">${item.product.price}</p>
                                                </div>

                                                <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                    <div className="stockCounter d-inline">
                                                        <span className="btn btn-danger minus" onClick={() => decreaseQty(item)}>-</span>
                                                        <input
                                                            type="number"
                                                            className="form-control count d-inline"
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <span className="btn btn-primary plus" onClick={() => increaseQty(item)}>+</span>
                                                    </div>
                                                </div>

                                                <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                    <i
                                                        id="delete_cart_item"
                                                        className="fa fa-trash btn btn-danger"
                                                        onClick={() => deleteItem(item)}
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>

                            <div className="col-12 col-lg-3 my-4">
                                <div id="order_summary">
                                    <h4>Order Summary</h4>
                                    <hr />
                                    <p>Subtotal: <span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + item.quantity), 0)} (Units)</span></p>
                                    <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc, item) => (acc + item.product.price * item.quantity), 0)}</span></p>
                                    <hr />
                                    <button
                                        id="checkout_btn"
                                        className="btn btn-primary btn-block"
                                        onClick={orderHandler}
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ) : (
                !complete ? (
                    <h2 className='mt-5'>Cart is empty</h2>
                ) : (
                    <Fragment>
                        <h2 className='mt-5'>Order Placed!</h2>
                    </Fragment>
                )
            )}
        </div>
    );
}
