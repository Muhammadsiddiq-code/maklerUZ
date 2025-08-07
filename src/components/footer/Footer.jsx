import React from "react";
import {
  FaBuilding,
  FaPhone,
  FaBlog,
  FaUserTie,
  FaSearch,
  FaHome,
  FaKey,
  FaBriefcase,
  FaHandshake,
  FaBalanceScale,
  FaTools,
  FaComment,
  FaLeaf,
  FaRegStar,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">
            <FaBuilding className="footer-icon" /> About us
          </h3>
          <ul className="footer-links">
            <li>
              <a href="/about">
                <FaBuilding className="link-icon" /> About us
              </a>
            </li>
            <li>
              <a href="/contact">
                <FaPhone className="link-icon" /> Contact us
              </a>
            </li>
            <li>
              <a href="/blog">
                <FaBlog className="link-icon" /> Blog
              </a>
            </li>
            <li>
              <a href="/careers">
                <FaUserTie className="link-icon" /> Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Properties Section */}
        <div className="footer-section">
          <h3 className="footer-title">
            <FaHome className="footer-icon" /> Properties
          </h3>
          <ul className="footer-links">
            <li>
              <a href="/properties/search">
                <FaSearch className="link-icon" /> Search
              </a>
            </li>
            <li>
              <a href="/properties/for-sale">
                <FaHome className="link-icon" /> For sale
              </a>
            </li>
            <li>
              <a href="/properties/for-rent">
                <FaKey className="link-icon" /> For rent
              </a>
            </li>
            <li>
              <a href="/properties/commercial">
                <FaBriefcase className="link-icon" /> Commercial
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="footer-title">
            <FaHandshake className="footer-icon" /> Services
          </h3>
          <ul className="footer-links">
            <li>
              <a href="/services/mortgage">
                <FaHandshake className="link-icon" /> Mortgage
              </a>
            </li>
            <li>
              <a href="/services/legal">
                <FaBalanceScale className="link-icon" /> Legal
              </a>
            </li>
            <li>
              <a href="/services/property-management">
                <FaTools className="link-icon" /> Property management
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">
            <FaComment className="footer-icon" /> Follow us
          </h3>
          <div className="social-icons">
            <a href="#" aria-label="Telegram">
              <FaComment className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaLeaf className="social-icon" />
            </a>
            <a href="#" aria-label="Rating">
              <FaRegStar className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        © 2025 <span className="logo-text">Makler.uz</span> - Barcha huquqlar
        himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
