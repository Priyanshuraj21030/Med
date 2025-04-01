import React from 'react';
import { SERVICES } from '../utils/constants.ts';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const navigateToService = (url: string) => {
    try {
      window.location.href = url;
    } catch (error) {
      console.error('Navigation error:', error);
      alert('Unable to access the service. Please make sure it is running.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MedPred</h3>
          <p>Advanced medical prediction system powered by AI</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/" onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}>Home</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigateToService(SERVICES.BREAST_CANCER);
              }}>Breast Cancer Detection</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigateToService(SERVICES.DIABETES);
              }}>Diabetes Detection</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@medpred.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MedPred. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 