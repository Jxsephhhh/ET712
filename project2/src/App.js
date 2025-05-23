import React from 'react';
import './App.css';
import honda_civic from './images/2025-honda-civic-black.webp'
import toyota_camry from './images/trim-2023-camry-le.png'
import ford_mustang from './images/image-by-path.webp'
import chevy_equinox from './images/2023-Chevy-Equinox-Premier-Model-Left-728x400.avif'

function App() {
  const cars = [
    {
      id: 1,
      make: 'Honda',
      model: 'Civic',
      year: 2023,
      price: '$22,950',
      image: honda_civic
    },
    {
      id: 2,
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: '$25,945',
      image: toyota_camry
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2023,
      price: '$27,770',
      image: ford_mustang
    },
    {
      id: 4,
      make: 'Chevrolet',
      model: 'Equinox',
      year: 2023,
      price: '$26,600',
      image: chevy_equinox
    }
  ];

  return (
    <div className="dealership-app">
      {/* Header */}
      <header className="header">
        <h1 className="title">QCC Dealership</h1>
        <nav>
          <ul>
            <li><a href="#inventory">Inventory</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <h2>Find Your Perfect Ride</h2>
          <p>Browse our selection of quality vehicles at competitive prices</p>
          <button className="btn">View Inventory</button>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="inventory">
        <h2>Featured Vehicles</h2>
        <div className="car-grid">
          {cars.map(car => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
              <h3>{car.year} {car.make} {car.model}</h3>
              <p className="price">{car.price}</p>
              <button className="btn">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Sales</h3>
            <p>New and pre-owned vehicles for every budget</p>
          </div>
          <div className="service-card">
            <h3>Financing</h3>
            <p>Flexible financing options to fit your needs</p>
          </div>
          <div className="service-card">
            <h3>Service</h3>
            <p>Professional maintenance and repairs</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>The QCC Dealership has been serving our community for over 20 years. We pride ourselves on offering quality vehicles and exceptional customer service.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Phone: (718)631-6262</p>
          <p>Email: info@qcc.com</p>
          <p>Address: 222-05, 56th Avenue Bayside, NY 11364</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 QCC Dealership. All rights to Joseph Bernabe</p>
      </footer>
    </div>
  );
}

export default App;