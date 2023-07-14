import React from "react";
import "./ProductItem.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartAction";

const ProductItem = ({ product }) => {
    const { title, price, image } = product;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-card">
            <img src={`../../assets/${image}`} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;