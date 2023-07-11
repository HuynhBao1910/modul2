import React from 'react';
import data from '../../assets/db.json';
import ProductItem from './ProductItem';

function ProductList() {
  return (
    <div className="product-list">
      {data.products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;