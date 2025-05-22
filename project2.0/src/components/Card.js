import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
export default function Card({ product, addToCart }) {
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="card">
      <img src={product.image} alt={product.title} onClick={() => setShowModal(true)} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div>
        <input type="number" min="1" value={qty} onChange={e => setQty(parseInt(e.target.value))} />
        <button onClick={() => addToCart(product, qty)}>Add to Cart</button>
      </div>
      {showModal && (
        <ModalWindow onClose={() => setShowModal(false)}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalWindow>
      )}
    </div>
  );
}
