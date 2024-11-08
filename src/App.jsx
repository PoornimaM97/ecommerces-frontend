import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as needed
import ProductsListing from './components/ProductsListing';


// import Home from './pages/Home';
// import Products from './pages/Products';
// import Cart from './pages/Cart';
// import Profile from './pages/Profile';
// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will be rendered on every page */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Routes>
        <Route path="/products" element={<ProductsListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
