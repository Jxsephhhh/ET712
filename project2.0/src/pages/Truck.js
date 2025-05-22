import React from 'react';
import products from '../data/products';
import Card from '../components/Card';
export default function Truck({ addToCart }) {
  const trucks = products.filter(p => p.category === 'Truck');
  return (<section><h2>Trucks</h2><div className="grid">{trucks.map(car => <Card key={car.id} product={car} addToCart={addToCart} />)}</div></section>);
}