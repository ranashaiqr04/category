import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        <div>
          <a href="/privacy" className="text-white mx-3">Privacy Policy</a>
          <a href="/terms" className="text-white mx-3">Terms of Service</a>
        </div>
        <div className="mt-3">
          <p>Follow us:</p>
          <a href="https://facebook.com" className="text-white mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
