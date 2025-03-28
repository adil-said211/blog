// src/App.js
import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to My Blog</h1>
        <p>Discover insightful articles on various topics</p>
        <button className="cta-button">Explore Blog</button>
      </header>

      <section className="features">
        <div className="feature-item">
          <h2>Latest Articles</h2>
          <p>Stay updated with the latest content</p>
        </div>
        <div className="feature-item">
          <h2>About Us</h2>
          <p>Learn more about what we do and why we write</p>
        </div>
        <div className="feature-item">
          <h2>Contact</h2>
          <p>Get in touch with us for collaborations or questions</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 My Blog | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;