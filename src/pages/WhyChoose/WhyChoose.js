import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './WhyChoose.css';

const WhyChoose = () => {
  const usps = [
    {
      icon: '🌿',
      title: '100% Natural & Pure',
      description: 'Every spice is sourced directly from farmers and processed without any artificial additives, colors, or preservatives. What you get is pure, unadulterated flavor.',
      highlight: 'No Additives'
    },
    {
      icon: '🔬',
      title: 'Lab Tested Quality',
      description: 'Each batch undergoes rigorous laboratory testing for moisture, ash content, microbial count, and heavy metals to ensure it meets international standards.',
      highlight: 'FSSAI Certified'
    },
    {
      icon: '🌾',
      title: 'Farm Fresh Sourcing',
      description: 'We work directly with farmers across India\'s spice-growing regions, ensuring fair prices for farmers and the freshest produce for our customers.',
      highlight: 'Direct from Farms'
    },
    {
      icon: '🏭',
      title: 'Modern Processing',
      description: 'State-of-the-art processing facilities with temperature-controlled environments preserve the natural oils and aroma of every spice.',
      highlight: 'Cryo-Grinding Technology'
    },
    {
      icon: '📦',
      title: 'Hygienic Packaging',
      description: 'Multi-layer, airtight packaging protects spices from moisture, light, and contamination, ensuring freshness until the last pinch.',
      highlight: 'Aroma Lock Technology'
    },
    {
      icon: '🌍',
      title: 'Export Quality Standards',
      description: 'Our products meet the stringent quality requirements of international markets including USA, UK, Europe, Middle East, and Australia.',
      highlight: 'APEDA Registered'
    }
  ];

  const differentiators = [
    { value: '25+', label: 'Years of Excellence', description: 'Trusted by generations of families and businesses' },
    { value: '100%', label: 'Natural Ingredients', description: 'No artificial colors, flavors, or preservatives' },
    { value: '40+', label: 'Countries Served', description: 'Exporting premium Indian spices worldwide' },
    { value: '500+', label: 'Satisfied Partners', description: 'Retail chains, restaurants, and distributors' }
  ];

  const testimonials = [
    {
      quote: "Seth Spices has been our trusted supplier for over 10 years. The consistency in quality is remarkable.",
      author: "Rajesh Patel",
      role: "CEO, Spice Imports LLC",
      location: "USA"
    },
    {
      quote: "The aroma and color of their turmeric powder is unmatched. Our customers specifically ask for Seth brand.",
      author: "Mohammed Al-Rashid",
      role: "Owner, Dubai Spice Market",
      location: "UAE"
    },
    {
      quote: "As a restaurant chain, we need reliability. Seth Spices delivers on time, every time with premium quality.",
      author: "Sarah Johnson",
      role: "Head Chef, Curry House UK",
      location: "United Kingdom"
    }
  ];

  const madeInIndia = [
    { region: 'Kashmir', spice: 'Saffron & Red Chilli', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400' },
    { region: 'Rajasthan', spice: 'Coriander & Cumin', image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?w=400' },
    { region: 'Kerala', spice: 'Black Pepper & Cardamom', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400' },
    { region: 'Andhra Pradesh', spice: 'Guntur Chilli', image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400' }
  ];

  return (
    <div className="why-choose-page">
      {/* Hero Section */}
      <section className="why-hero gradient-hero">
        <div className="container">
          <div className="why-hero__content">
            <span className="why-hero__badge">
              <span className="why-hero__badge-icon">✨</span>
              The Seth Spices Difference
            </span>
            <h1 className="why-hero__title">
              Why Choose <span className="text-gold">Seth Spices</span>?
            </h1>
            <p className="why-hero__subtitle">
              For over 25 years, we've been the trusted choice for discerning customers 
              who refuse to compromise on quality. Discover what makes us different.
            </p>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="why-usps section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Promise</span>
            <h2 className="section-title">The Pillars of Our Quality</h2>
            <p className="section-subtitle">
              Every aspect of our process is designed with one goal: delivering the finest spices to your table.
            </p>
          </div>

          <div className="why-usps__grid">
            {usps.map((usp, index) => (
              <div key={index} className="why-usps__card">
                <div className="why-usps__icon">{usp.icon}</div>
                <span className="why-usps__highlight">{usp.highlight}</span>
                <h3 className="why-usps__title">{usp.title}</h3>
                <p className="why-usps__description">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="why-differentiators gradient-warm">
        <div className="container">
          <div className="why-differentiators__grid">
            {differentiators.map((item, index) => (
              <div key={index} className="why-differentiators__item">
                <span className="why-differentiators__value">{item.value}</span>
                <span className="why-differentiators__label">{item.label}</span>
                <span className="why-differentiators__description">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made in India */}
      <section className="why-india section">
        <div className="container">
          <div className="why-india__header">
            <div className="why-india__content">
              <span className="section-label">Proudly Indian</span>
              <h2 className="section-title">Made in India, Loved Worldwide</h2>
              <p>
                India is the spice capital of the world, and we source our ingredients from the 
                finest growing regions. Each region imparts unique characteristics to the spices, 
                creating flavors that are impossible to replicate elsewhere.
              </p>
              <div className="why-india__flag">
                <span>🇮🇳</span>
                <span>Celebrating Indian Heritage</span>
              </div>
            </div>
          </div>

          <div className="why-india__regions">
            {madeInIndia.map((region, index) => (
              <div key={index} className="why-india__region">
                <div className="why-india__region-image">
                  <img src={region.image} alt={region.region} />
                </div>
                <div className="why-india__region-info">
                  <h4>{region.region}</h4>
                  <span>{region.spice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="why-testimonials section section--light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Partners Say</h2>
          </div>

          <div className="why-testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="why-testimonials__card">
                <div className="why-testimonials__quote">"</div>
                <p className="why-testimonials__text">{testimonial.quote}</p>
                <div className="why-testimonials__author">
                  <div className="why-testimonials__avatar">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="why-testimonials__info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                    <span className="why-testimonials__location">📍 {testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="why-comparison section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">The Difference</span>
            <h2 className="section-title">Seth Spices vs. Ordinary Spices</h2>
          </div>

          <div className="why-comparison__table">
            <div className="why-comparison__header">
              <div className="why-comparison__col">Feature</div>
              <div className="why-comparison__col why-comparison__col--seth">Seth Spices</div>
              <div className="why-comparison__col">Others</div>
            </div>
            <div className="why-comparison__row">
              <div className="why-comparison__col">Sourcing</div>
              <div className="why-comparison__col why-comparison__col--seth">✓ Direct from Farmers</div>
              <div className="why-comparison__col">✗ Multiple Middlemen</div>
            </div>
            <div className="why-comparison__row">
              <div className="why-comparison__col">Artificial Colors</div>
              <div className="why-comparison__col why-comparison__col--seth">✓ 100% Color Free</div>
              <div className="why-comparison__col">✗ Often Added</div>
            </div>
            <div className="why-comparison__row">
              <div className="why-comparison__col">Lab Testing</div>
              <div className="why-comparison__col why-comparison__col--seth">✓ Every Batch Tested</div>
              <div className="why-comparison__col">✗ Rarely Tested</div>
            </div>
            <div className="why-comparison__row">
              <div className="why-comparison__col">Processing</div>
              <div className="why-comparison__col why-comparison__col--seth">✓ Cryo-Grinding</div>
              <div className="why-comparison__col">✗ Heat-Based</div>
            </div>
            <div className="why-comparison__row">
              <div className="why-comparison__col">Certifications</div>
              <div className="why-comparison__col why-comparison__col--seth">✓ FSSAI, ISO, HACCP, APEDA</div>
              <div className="why-comparison__col">✗ Limited</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="why-cta gradient-hero text-center">
        <div className="container">
          <h2 className="why-cta__title">Experience the Seth Spices Difference</h2>
          <p className="why-cta__subtitle">
            Join thousands of satisfied customers who have made the switch to premium quality spices.
          </p>
          <div className="why-cta__buttons">
            <Link to="/products">
              <Button variant="gold" size="lg">Explore Products</Button>
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20know%20more%20about%20Seth%20Spices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                💬 Chat with Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
