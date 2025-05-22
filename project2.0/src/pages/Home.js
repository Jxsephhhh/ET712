import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
// Import local slideshow images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';

const slideImages = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h2>Welcome to Our Car Dealership</h2>
        <p>Discover the best deals on Sedans, SUVs, and Trucks.</p>
        <Link to="/sedan" className="btn btn-primary">Shop Now</Link>
      </section>

      <section className="slideshow-section">
        <Slideshow images={slideImages} />
      </section>

      <section className="about">
        <h3>About Us</h3>
        <p>
          At <strong>QCC Dealership</strong>, we’ve been matching drivers with their perfect cars
          for over 20 years. Our expert team is dedicated to transparent pricing, quality service,
          and a hassle-free buying experience.
        </p>
      </section>

      <section className="info">
        <h3>Our Services</h3>
        <ul>
          <li>Flexible Financing & Leasing</li>
          <li>Certified Pre-Owned Vehicles</li>
          <li>Trade-In & Valuation</li>
          <li>24/7 Roadside Assistance</li>
        </ul>
      </section>

      <section className="inventory-preview">
        <h3>Featured Inventory</h3>
        <div className="grid preview-grid">
          <div className="preview-card">
            <h4>Compact Sedan</h4>
            <p>From $20,000</p>
          </div>
          <div className="preview-card">
            <h4>Family SUV</h4>
            <p>From $35,000</p>
          </div>
          <div className="preview-card">
            <h4>Pickup Truck</h4>
            <p>From $30,000</p>
          </div>
        </div>
        <Link to="/sedan" className="btn btn-secondary">View Full Inventory</Link>
      </section>
    </>
  );
}
