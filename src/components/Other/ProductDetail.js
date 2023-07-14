import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`/data/products/${id}.json`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProduct();
    }, [id]);

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to cart</button>
        </div>
    );
}

export default ProductDetail;