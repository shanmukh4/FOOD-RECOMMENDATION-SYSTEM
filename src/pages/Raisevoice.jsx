import React from 'react';
import './ComplaintSection.css';


const ComplaintSection = () => {
  return (
    <div className="complaint-section">
      <h2>Raise Voice</h2>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" placeholder="Your full name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" placeholder="Your email address" required />

        <label htmlFor="phone">Your Phone Number:</label>
        <input type="tel" id="phone" placeholder="Your phone number" />

        <label htmlFor="item">Item Name:</label>
        <input type="text" id="item" placeholder="Name of the item" required />

        <label htmlFor="complaint">Your Complaint:</label>
        <textarea id="complaint" rows="4" placeholder="Describe your complaint here..." required></textarea>

        <button type="submit">Submit Complaint</button>
      </form>
      <p className="info-text">
        To help save others from harmful products, please register a complaint about any issues you've faced with food items.
      </p>
    </div>
  );
};

export default ComplaintSection;
