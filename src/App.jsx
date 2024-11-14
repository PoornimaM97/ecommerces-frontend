//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars'; // Adjust the path as needed
import ProductsListing from './components/ProductsListing';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';;


// import Home from './pages/Home';
// import Products from './pages/Products';
// import Cart from './pages/Cart';
// import Profile from './pages/Profile';
// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <>
        <Navbars /> {/* Navbar will be rendered on every page */}
        </>
        {/* <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>*/}
        <Routes>
        <Route path="/login" element={<Login/>} /> 
        <Route path="/products" element={<ProductsListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
