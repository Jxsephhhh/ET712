import React from 'react';
import products from '../data/products';
import Card from '../components/Card';
export default function SUV({ addToCart }) {
  const suvs = products.filter(p => p.category === 'SUV');
  return (<section><h2>SUVs</h2><div className="grid">{suvs.map(car => <Card key={car.id} product={car} addToCart={addToCart} />)}</div></section>);
}
