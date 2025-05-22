import React from 'react';
import products from '../data/products';
import Card from '../components/Card';
export default function Sedan({ addToCart }) {
  const sedans = products.filter(p => p.category === 'Sedan');
  return (<section><h2>Sedans</h2><div className="grid">{sedans.map(car => <Card key={car.id} product={car} addToCart={addToCart} />)}</div></section>);
}