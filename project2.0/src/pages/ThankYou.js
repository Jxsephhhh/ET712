import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <section>
      <h2>Thank You!</h2>
      <p>Your order has been placed successfully. We appreciate your business!</p>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </section>
  );
}