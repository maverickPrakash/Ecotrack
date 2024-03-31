// Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
       
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/carbonFootprintCalculator">Carbon calculator</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 EcoTrack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
