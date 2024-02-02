// MorePage.js
import React from 'react';
import './MorePages.css';

const MorePage = () => {
  return (
    <div className="more-page">
      <h1>More</h1>

      {/* Bakery Description */}
      <div className="bakery-description">
        <h2>Welcome to Tedi's Couture Confections</h2>
        <p>
          At Tedi's Couture Confections, we exude a fervent passion for the exquisite blend of style and craftsmanship in the world of baking. Since our establishment in 2007, we have been devoted to delivering the epitome of haute baked goods to our discerning clientele.
        </p>
        <p>
          Our unwavering commitment to impeccable quality, timeless traditions, and avant-garde innovation distinguishes us in the realm of culinary artistry. Each delectable creation is meticulously curated, employing only the most luxurious ingredients and following time-honored recipes. Whether you possess the finesse of a seasoned pastry chef or are a novice with a sweet tooth, we extend an invitation to revel in the indulgence of extraordinary confections.
        </p>
        <p>
          Embark on a journey through our chic website to uncover a captivating array of products, ranging from artisanal bread to irresistibly delightful pastries. Join us in celebrating the fusion of taste and tradition, as every moment becomes an opportunity to relish the sweet side of life.
        </p>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Location: 123 Confectionery Lane, Chic City
        </p>
        <p>
          Phone: (555) 123-4567
        </p>
        <p>
          Email: info@yourcoutureconfections.com
        </p>
      </div>
      
      {/* Google Maps Embed */}
      <div className="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128084.03975048201!2d10.62031476989753!3d59.89375210157401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C%20Norway!5e0!3m2!1sen!2s!4v1701607958239!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Go Back to Home Link */}
      <a id='link' href="/">Go Back to Home</a>
    </div>
  );
}

export default MorePage;
