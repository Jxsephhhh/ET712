import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Sedan from './pages/Sedan';
import SUV from './pages/SUV';
import Truck from './pages/Truck';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const TAX_RATE = 0.0816;

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">CarDealership</div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sedan">Sedans</Link></li>
              <li><Link to="/suv">SUVs</Link></li>
              <li><Link to="/truck">Trucks</Link></li>
              <li><Link to="/cart">Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sedan" element={<Sedan addToCart={addToCart} />} />
          <Route path="/suv" element={<SUV addToCart={addToCart} />} />
          <Route path="/truck" element={<Truck addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} taxRate={TAX_RATE} />} />
          <Route path="/checkout" element={<Checkout cart={cart} taxRate={TAX_RATE} clearCart={clearCart} navigate={navigate} />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CarDealership. All rights reserved.</p>
          <p>1234 Main St, Anytown, NY • (555) 123-4567</p>
        </div>
      </footer>
    </>
  );
}

export default App;
