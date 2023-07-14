import React, { useState, useEffect } from 'react';
import data from '../../assets/db.json';
import ProductItem from './ProductItem';
import './ProductList.scss';

function ProductList({ gender, searchText }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Lọc các sản phẩm theo giới tính và từ khóa tìm kiếm
  useEffect(() => {
    const filtered = data.products.filter(
      product =>
        product.gender === gender &&
        product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [gender, searchText]);

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;