import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onAddToCart }) => (
  <div className="modal">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    <button onClick={onClose}>Close</button>
  </div>
);

export default ProductModal;
