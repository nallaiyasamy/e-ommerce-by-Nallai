import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import lop from '../assets/product/lop-1.jpeg';
import Jean from '../assets/product/Jean.jpg';
import tshirt from '../assets/product/t-shirt.jpg';
import smartphone from '../assets/product/smartphone.avif';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

 
  const images = {
    Laptop: lop,
    'Jeans': Jean,
    'T-Shirt': tshirt,
    Smartphone: smartphone,
  };

  return (
    <div className="product-card">
      <img src={images[product.name] || product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
