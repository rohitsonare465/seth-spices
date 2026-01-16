import React, { useState } from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✓</div>
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form__input"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form__input"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="phone" className="contact-form__label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="contact-form__input"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="company" className="contact-form__label">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            className="contact-form__input"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact-form__group">
        <label htmlFor="subject" className="contact-form__label">Subject *</label>
        <select
          id="subject"
          name="subject"
          className="contact-form__select"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">Select a subject</option>
          <option value="wholesale">Wholesale Inquiry</option>
          <option value="export">Export Partnership</option>
          <option value="private-label">Private Label Services</option>
          <option value="custom-blends">Custom Blends</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">Message *</label>
        <textarea
          id="message"
          name="message"
          className="contact-form__textarea"
          placeholder="Tell us about your requirements..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="large" 
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
