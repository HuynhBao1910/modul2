import React from "react";


const ProductItem = ({ product }) => {
    return (
        <div className="product-card">
            <img src={require(`../../assets/images/${product.image}`).default} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductItem;