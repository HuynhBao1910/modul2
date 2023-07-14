import React from 'react';

const CartItem = ({ item, handleRemoveItem }) => {
    const { id, name, price, quantity, image } = item;

    return (
        <li className="cart-item">
            <div className="item-info">
                <div className="item-image">
                    <img src={image} alt={name} />
                </div>
                <div className="item-details">
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <button onClick={() => handleRemoveItem(id)}>Remove item</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;