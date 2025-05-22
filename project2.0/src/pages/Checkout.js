import React from 'react';

export default function Checkout({ cart, taxRate, clearCart, navigate }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleConfirm = () => {
    clearCart();
    navigate('/thankyou');
  };

  return (
    <section>
      <h2>Checkout</h2>
      <div className="totals">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Sales Tax (8.16%): ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <button onClick={handleConfirm} className="btn btn-secondary">
        Confirm Order
      </button>
    </section>
  );
}