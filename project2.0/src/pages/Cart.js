import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cart, taxRate }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <section>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Qty: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="totals">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Sales Tax (8.16%): ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          <Link to="/checkout" className="btn btn-primary">
            Proceed to Checkout
          </Link>
        </>
      )}
    </section>
  );
}