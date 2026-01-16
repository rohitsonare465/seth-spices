import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Quality.css';

const Quality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const qualityProcess = [
    {
      step: '01',
      title: 'Raw Material Selection',
      description: 'We source only the finest spices from trusted farmers across India. Each batch is carefully inspected for quality, color, aroma, and purity before procurement.',
      icon: '🌾'
    },
    {
      step: '02',
      title: 'Cleaning & Sorting',
      description: 'Advanced cleaning systems remove impurities, stones, and foreign matter. Multiple sorting stages ensure only the best quality spices proceed to processing.',
      icon: '✨'
    },
    {
      step: '03',
      title: 'Processing & Grinding',
      description: 'Temperature-controlled grinding preserves the natural oils and flavors. Our modern machinery ensures consistent texture and quality in every batch.',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Lab Testing',
      description: 'Every batch undergoes rigorous laboratory testing for moisture, ash content, volatile oils, and microbial contamination to meet international standards.',
      icon: '🔬'
    },
    {
      step: '05',
      title: 'Quality Packaging',
      description: 'Vacuum-sealed and nitrogen-flushed packaging preserves freshness. Our food-grade packaging protects against moisture, light, and contamination.',
      icon: '📦'
    }
  ];

  const certifications = [
    {
      name: 'FSSAI',
      full: 'Food Safety and Standards Authority of India',
      description: 'Licensed under India\'s apex food safety regulatory body, ensuring our products meet national food safety standards.',
      icon: '🏛️'
    },
    {
      name: 'ISO 22000',
      full: 'International Food Safety Management',
      description: 'Certified for implementing international food safety management systems throughout our production process.',
      icon: '🌐'
    },
    {
      name: 'HACCP',
      full: 'Hazard Analysis Critical Control Points',
      description: 'Compliant with HACCP principles for identifying and preventing food safety hazards.',
      icon: '✓'
    },
    {
      name: 'APEDA',
      full: 'Agricultural and Processed Food Products Export',
      description: 'Registered with APEDA for export of agricultural products, meeting international export standards.',
      icon: '🌍'
    }
  ];

  const labTests = [
    { name: 'Moisture Content', standard: '< 10%', icon: '💧' },
    { name: 'Total Ash', standard: '< 7%', icon: '🔥' },
    { name: 'Acid Insoluble Ash', standard: '< 1.5%', icon: '⚗️' },
    { name: 'Volatile Oil', standard: '> 2%', icon: '🌿' },
    { name: 'Microbial Count', standard: 'FSSAI Limit', icon: '🦠' },
    { name: 'Heavy Metals', standard: 'Below Safe Limit', icon: '⚠️' }
  ];

  return (
    <main className="quality-page">
      {/* Hero Section */}
      <section className="quality-hero gradient-hero">
        <div className="container">
          <div className="quality-hero__content reveal">
            <span className="quality-hero__badge">
              <span className="quality-hero__badge-icon">🔬</span>
              Quality Assurance
            </span>
            <h1 className="quality-hero__title">
              Uncompromising<br />
              <span className="text-gold">Quality Standards</span>
            </h1>
            <p className="quality-hero__subtitle">
              From farm to your table, we maintain the highest quality standards 
              at every step. Our commitment to purity is backed by rigorous testing 
              and internationally recognized certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section quality-promise">
        <div className="container">
          <div className="quality-promise__grid reveal">
            <div className="quality-promise__content">
              <span className="section-label">Our Commitment</span>
              <h2 className="section-title">100% Pure, Always</h2>
              <p className="lead">
                At Seth Spices, quality isn't just a goal—it's our foundation. 
                Every product that leaves our facility carries our promise of purity.
              </p>
              <p>
                We believe that authentic taste comes from authentic ingredients. 
                That's why we never use artificial colors, flavors, or preservatives. 
                Our spices are 100% natural, sourced directly from farmers who share 
                our commitment to quality.
              </p>
              <div className="quality-promise__highlights">
                <div className="quality-promise__highlight">
                  <span className="quality-promise__highlight-check">✓</span>
                  <div>
                    <strong>No Artificial Colors</strong>
                    <span>Natural vibrant colors from pure spices</span>
                  </div>
                </div>
                <div className="quality-promise__highlight">
                  <span className="quality-promise__highlight-check">✓</span>
                  <div>
                    <strong>No Preservatives</strong>
                    <span>Fresh packaging technology instead</span>
                  </div>
                </div>
                <div className="quality-promise__highlight">
                  <span className="quality-promise__highlight-check">✓</span>
                  <div>
                    <strong>No Additives</strong>
                    <span>Just pure, ground spices</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="quality-promise__image">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=500&fit=crop" alt="Quality spices" />
              <div className="quality-promise__badge">
                <span className="quality-promise__badge-value">100%</span>
                <span className="quality-promise__badge-label">Pure & Natural</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section quality-process bg-warm">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">From Farm to Package</h2>
            <p className="section-subtitle">
              A rigorous 5-step quality control process ensures every spice meets our high standards.
            </p>
          </div>
          <div className="quality-process__timeline reveal">
            {qualityProcess.map((item, index) => (
              <div key={index} className="quality-process__item">
                <div className="quality-process__step">
                  <span className="quality-process__step-number">{item.step}</span>
                  <span className="quality-process__step-icon">{item.icon}</span>
                </div>
                <div className="quality-process__content">
                  <h3 className="quality-process__title">{item.title}</h3>
                  <p className="quality-process__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Testing */}
      <section className="section quality-testing">
        <div className="container">
          <div className="quality-testing__grid reveal">
            <div className="quality-testing__content">
              <span className="section-label">Laboratory Testing</span>
              <h2 className="section-title">Rigorous Quality Checks</h2>
              <p>
                Every batch of spices undergoes comprehensive laboratory testing 
                before packaging. Our in-house laboratory and third-party testing 
                ensure all products meet national and international standards.
              </p>
            </div>
            <div className="quality-testing__tests">
              {labTests.map((test, index) => (
                <div key={index} className="quality-testing__test">
                  <span className="quality-testing__test-icon">{test.icon}</span>
                  <div className="quality-testing__test-info">
                    <span className="quality-testing__test-name">{test.name}</span>
                    <span className="quality-testing__test-standard">{test.standard}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section quality-certifications gradient-warm">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Certifications</span>
            <h2 className="section-title">Internationally Recognized</h2>
            <p className="section-subtitle">
              Our commitment to quality is backed by prestigious certifications.
            </p>
          </div>
          <div className="quality-certifications__grid reveal">
            {certifications.map((cert, index) => (
              <div key={index} className="quality-certifications__card">
                <span className="quality-certifications__icon">{cert.icon}</span>
                <h3 className="quality-certifications__name">{cert.name}</h3>
                <p className="quality-certifications__full">{cert.full}</p>
                <p className="quality-certifications__description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section quality-facility">
        <div className="container">
          <div className="quality-facility__grid reveal">
            <div className="quality-facility__images">
              <div className="quality-facility__image quality-facility__image--main">
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop" alt="Modern facility" />
              </div>
              <div className="quality-facility__image quality-facility__image--secondary">
                <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300&h=200&fit=crop" alt="Processing unit" />
              </div>
            </div>
            <div className="quality-facility__content">
              <span className="section-label">Our Facility</span>
              <h2 className="section-title">State-of-the-Art Processing</h2>
              <p>
                Our modern processing facility is equipped with the latest 
                technology for cleaning, grinding, and packaging. Every aspect 
                is designed to maintain hygiene and preserve the natural quality 
                of our spices.
              </p>
              <ul className="quality-facility__features">
                <li>Climate-controlled storage</li>
                <li>Automated cleaning systems</li>
                <li>Temperature-controlled grinding</li>
                <li>In-house testing laboratory</li>
                <li>Hygienic packaging lines</li>
                <li>Pest control management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section quality-cta gradient-hero">
        <div className="container text-center">
          <div className="quality-cta__content reveal">
            <h2 className="quality-cta__title">Experience the Quality Difference</h2>
            <p className="quality-cta__subtitle">
              Taste the purity in every dish. Partner with us for premium quality spices.
            </p>
            <div className="quality-cta__buttons">
              <Link to="/products">
                <Button variant="gold" size="lg">Explore Products</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Request Sample</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quality;
