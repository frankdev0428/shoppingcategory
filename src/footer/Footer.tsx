// Footer.tsx
import React from 'react';
import styles from '../footer/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <img src="/path/to/your/logo.png" alt="Company Logo" className={styles.logo} />
          <p>Your company's mission and brief description.</p>
        </div>
        <div className={styles.footerSection}>
          <h2>About Us</h2>
          <ul>
            <li><a href="/about">Learn More</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2>Products</h2>
          <ul>
            <li><a href="/product1">Product 1</a></li>
            <li><a href="/product2">Product 2</a></li>
            <li><a href="/product3">Product 3</a></li>
            <li><a href="/product4">Product 4</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2>Contact Us</h2>
          <p>Address: [Your Address]</p>
          <p>Phone: [Your Phone Number]</p>
          <p>Email: [Your Email Address]</p>
          <a href="/contact">Contact Form</a>
        </div>
      </div>
      <div className={styles.footerSocial}>
        <h3>Follow Us</h3>
        <ul>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/twitter">Twitter</a></li>
          <li><a href="/linkedin">LinkedIn</a></li>
          <li><a href="/instagram">Instagram</a></li>
        </ul>
      </div>
      <div className={styles.footerNewsletter}>
        <h3>Subscribe to Our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className={styles.footerPolicies}>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/cookies">Cookies</a>
      </div>
      <div className={styles.footerCopyright}>
        © 2023 Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;