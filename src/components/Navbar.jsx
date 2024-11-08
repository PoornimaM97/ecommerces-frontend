import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-Shop</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profile">My Account</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
