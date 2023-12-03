// MorePage.js
import React from 'react';
import './MorePages.css';

const MorePage = () => {
  return (
    <div className="more-page">
      <h1>More</h1>

      {/* Bakery Description */}
      <div className="bakery-description">
        <h2>Welcome to Arsi's Bakery</h2>
        <p>
          At Arsi's Bakery, we are passionate about the art and science of baking. Since 2007, we have been dedicated to providing the finest baked goods to our community.
        </p>
        <p>
          Our commitment to quality, tradition, and innovation sets us apart. Every product is crafted with care, using the finest ingredients and time-tested recipes. Whether you're a seasoned baker or a novice, we invite you to experience the joy of exceptional baked treats.
        </p>
        <p>
          Explore our website to discover a delightful range of products, from artisanal bread to delectable pastries. Join us on a journey of taste and tradition – because every moment is an opportunity to savor something sweet.
        </p>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Address: 123 Bakery Street, Cityville
        </p>
        <p>
          Phone: (555) 123-4567
        </p>
        <p>
          Email: info@yourbakery.com
        </p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128084.03975048201!2d10.62031476989753!3d59.89375210157401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C%20Norway!5e0!3m2!1sen!2s!4v1701607958239!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      {/* Go Back to Home Link */}
      <a id='link' href="/">Go Back to Home</a>
    </div>
  );
}

export default MorePage;
