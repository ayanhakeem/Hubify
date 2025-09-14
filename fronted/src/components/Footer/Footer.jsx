// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side */}
        <div className="footer-logo">
          <h2>NCEThub</h2>
          <p>Connecting coders, creators & innovators.</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right side - Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <div className="social-icons">
              <a href="https://github.com/ayanhakeem" target="_blank" rel="noreferrer" title="GitHub">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" width="24" height="24" />
              </a>
              <a href="https://www.linkedin.com/in/mahmadayan-hakeem-55a1b9300" target="_blank" rel="noreferrer" title="LinkedIn">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" width="24" height="24" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Instagram" width="24" height="24" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg" alt="Twitter" width="24" height="24" />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NCEThub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
