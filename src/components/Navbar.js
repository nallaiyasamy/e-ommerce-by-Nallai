import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <nav className="navbar">
      <h1>E-Commerce</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/Electronics">Electronics</Link></li>
        <li><Link to="/category/Clothing">Clothing</Link></li>
      </ul>
      <div className="cart-icon">
        🛒 <span>{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
