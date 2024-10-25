import React, { useState } from 'react';
import './Contact.css'; // Import the CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted! 
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Issue: ${formData.issue}
    Suggestion: ${formData.suggestion}`);

    setFormData({ name: '', email: '', phone: '', issue: '', suggestion: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="issue">Issue/Complaint:</label>
          <textarea
            name="issue"
            id="issue"
            value={formData.issue}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="suggestion">Suggestion Box:</label>
          <textarea
            name="suggestion"
            id="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
