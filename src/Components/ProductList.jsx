import React from 'react';
import './ProductList.css'; 
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';


const ProductList = () => {
  
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); 
  // State to store disabled products

  const products = [
    { pro: 'x', name: 'Product A', price: 10 },
    { pro: 'y', name: 'Product B', price: 20 },
    { pro: 'z', name: 'Product C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.pro]); // Mark the product as disabled
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.pro} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button 
              className={`add-to-cart-btn ${disabledProducts.includes(product.pro) ? 'disabled' : ''}`}
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.pro)} 
              // Disable button if product is in disabledProducts
            >   
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
