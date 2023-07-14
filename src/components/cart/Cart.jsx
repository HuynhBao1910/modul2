import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../store/cart/cartAction';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleUpdateQuantity = (productId, quantity) => {
        dispatch(updateQuantity(productId, quantity));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div>
                                <span>{item.name}</span>
                            </div>
                            <div>
                                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(event) => handleUpdateQuantity(item.id, event.target.value)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;