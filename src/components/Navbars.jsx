import React from 'react';
import { Link } from 'react-router-dom';


import { FaShoppingCart, FaUser } from 'react-icons/fa';


const Navbars = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
        <Link to="/">E-Shop</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="menu-toggle" onClick={toggleMenu()}>☰</div> */}
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className='"nav-item active"'>
          <Link to="/products" className='nav-link' >Products <span className="sr-only">(current)</span></Link>
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
      </div>
    </nav>
  );
};

export default Navbars;
