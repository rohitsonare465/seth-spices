import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: ['Seth Spices Pvt. Ltd.', '337-3 Agarbatti Complex, Sanwer Road', 'Sector A, Indore', 'Madhya Pradesh, India']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 97555 54650', 'Mon-Sat: 9:00 AM - 6:00 PM']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@sethspices.com']
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'bulk', label: 'Bulk Order Inquiry' },
    { value: 'export', label: 'Export Partnership' },
    { value: 'distributor', label: 'Become a Distributor' },
    { value: 'feedback', label: 'Feedback' }
  ];

  const quickActions = [
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      action: 'https://wa.me/919755554650?text=Hi,%20I%20want%20to%20inquire%20about%20Seth%20Spices',
      color: 'green'
    },
    {
      icon: '📧',
      title: 'Email',
      description: 'Send us an email',
      action: 'mailto:info@sethspices.com',
      color: 'primary'
    },
    {
      icon: '📞',
      title: 'Call Now',
      description: 'Speak with our team',
      action: 'tel:+919755554650',
      color: 'gold'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero gradient-hero">
        <div className="container">
          <div className="contact-hero__content">
            <span className="contact-hero__badge">
              <span className="contact-hero__badge-icon">💬</span>
              Get in Touch
            </span>
            <h1 className="contact-hero__title">
              Let's Start a <span className="text-gold">Conversation</span>
            </h1>
            <p className="contact-hero__subtitle">
              Have questions about our products or interested in bulk orders?
              We're here to help you bring the finest spices to your table.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="contact-quick">
        <div className="container">
          <div className="contact-quick__grid">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.action}
                target={action.icon === '💬' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`contact-quick__card contact-quick__card--${action.color}`}
              >
                <span className="contact-quick__icon">{action.icon}</span>
                <h3 className="contact-quick__title">{action.title}</h3>
                <p className="contact-quick__description">{action.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-main__grid">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="contact-form__header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="contact-form__success">
                  <span className="contact-form__success-icon">✓</span>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        subject: '',
                        message: '',
                        inquiryType: 'general'
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form__form">
                  <div className="contact-form__group contact-form__group--full">
                    <label className="contact-form__label">Inquiry Type</label>
                    <div className="contact-form__radio-group">
                      {inquiryTypes.map((type) => (
                        <label key={type.value} className="contact-form__radio">
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleChange}
                          />
                          <span className="contact-form__radio-custom"></span>
                          {type.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="contact-form__input"
                      />
                    </div>
                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="contact-form__input"
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 97555 54650"
                        className="contact-form__input"
                      />
                    </div>
                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="contact-form__input"
                      />
                    </div>
                  </div>

                  <div className="contact-form__group contact-form__group--full">
                    <label className="contact-form__label" htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="contact-form__input"
                    />
                  </div>

                  <div className="contact-form__group contact-form__group--full">
                    <label className="contact-form__label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your requirements..."
                      rows="5"
                      required
                      className="contact-form__textarea"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="contact-form__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info__cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info__card">
                    <span className="contact-info__icon">{info.icon}</span>
                    <div className="contact-info__content">
                      <h3 className="contact-info__title">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="contact-info__detail">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="contact-info__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842579726!2d75.69903523359375!3d22.724065799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Seth Spices Location"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="contact-info__social">
                <h4>Follow Us</h4>
                <div className="contact-info__social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq section section--light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="contact-faq__grid">
            <div className="contact-faq__item">
              <h4>What is the minimum order quantity?</h4>
              <p>For retail customers, there's no minimum. For bulk orders, the minimum is 100 kg per product.</p>
            </div>
            <div className="contact-faq__item">
              <h4>Do you ship internationally?</h4>
              <p>Yes! We export to 40+ countries worldwide. Contact our export team for shipping details.</p>
            </div>
            <div className="contact-faq__item">
              <h4>What certifications do you have?</h4>
              <p>We are FSSAI, ISO 22000, HACCP, and APEDA certified. All our products meet international standards.</p>
            </div>
            <div className="contact-faq__item">
              <h4>Can I get custom packaging?</h4>
              <p>Yes, we offer private labeling and custom packaging for bulk orders. Contact us for details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
