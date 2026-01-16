import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Scroll reveal animation
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

  const milestones = [
    { year: '1995', title: 'The Beginning', description: 'Started as a small family business with a passion for authentic Indian spices.' },
    { year: '2005', title: 'First Export', description: 'Expanded our reach to international markets, serving customers across Asia.' },
    { year: '2015', title: 'Modern Facility', description: 'Established state-of-the-art processing facility with ISO certification.' },
    { year: '2024', title: 'Global Presence', description: 'Now serving 40+ countries with premium quality spices and growing.' }
  ];

  const values = [
    { icon: '🌿', title: 'Purity First', description: 'We never compromise on quality. Every spice is 100% pure with no artificial additives.' },
    { icon: '🔬', title: 'Lab Tested', description: 'Rigorous quality checks ensure our spices meet international food safety standards.' },
    { icon: '🌾', title: 'Farm Fresh', description: 'Sourced directly from trusted farmers across India\'s finest spice regions.' },
    { icon: '🤝', title: 'Trust & Integrity', description: 'Building lasting relationships through honest business practices for over 25 years.' }
  ];

  const team = [
    { name: 'Rajesh Seth', role: 'Founder & Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Priya Seth', role: 'Director - Quality Assurance', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'Amit Sharma', role: 'Head - Export Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' }
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero gradient-hero">
        <div className="container">
          <div className="about-hero__content reveal">
            <span className="about-hero__badge">
              <span className="about-hero__badge-icon">🌿</span>
              Our Story
            </span>
            <h1 className="about-hero__title">
              A Legacy of<br />
              <span className="text-gold">Pure Indian Spices</span>
            </h1>
            <p className="about-hero__subtitle">
              For over 25 years, Seth Spices has been bringing the authentic taste 
              of India to kitchens around the world. Our commitment to purity and 
              quality has made us a trusted name in the spice industry.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story bg-warm">
        <div className="container">
          <div className="about-story__grid reveal">
            <div className="about-story__images">
              <div className="about-story__image about-story__image--main">
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=500&fit=crop" alt="Spice processing facility" />
              </div>
              <div className="about-story__image about-story__image--secondary">
                <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300&h=300&fit=crop" alt="Fresh spices" />
              </div>
              <div className="about-story__experience">
                <span className="about-story__experience-value">25+</span>
                <span className="about-story__experience-label">Years of Excellence</span>
              </div>
            </div>
            <div className="about-story__content">
              <span className="section-label">Our Heritage</span>
              <h2 className="section-title">From Farm to Your Table</h2>
              <p className="lead">
                Seth Spices was born from a simple belief: every kitchen deserves 
                the purest, most flavorful spices that India has to offer.
              </p>
              <p>
                Our journey began in 1995 when our founder, inspired by generations 
                of family tradition in spice trading, established Seth Spices with a 
                vision to bring authentic Indian flavors to the world.
              </p>
              <p>
                Today, we work directly with farmers across India's most renowned 
                spice-growing regions — from the chilli farms of Guntur to the 
                turmeric fields of Erode, from the coriander farms of Rajasthan 
                to the cardamom hills of Kerala.
              </p>
              <div className="about-story__highlights">
                <div className="about-story__highlight">
                  <span className="about-story__highlight-icon">✓</span>
                  <span>Direct farmer partnerships</span>
                </div>
                <div className="about-story__highlight">
                  <span className="about-story__highlight-icon">✓</span>
                  <span>Traditional processing methods</span>
                </div>
                <div className="about-story__highlight">
                  <span className="about-story__highlight-icon">✓</span>
                  <span>Modern quality control</span>
                </div>
                <div className="about-story__highlight">
                  <span className="about-story__highlight-icon">✓</span>
                  <span>Sustainable sourcing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section about-values">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide everything we do, from sourcing to delivery.
            </p>
          </div>
          <div className="about-values__grid reveal">
            {values.map((value, index) => (
              <div key={index} className="about-values__card">
                <span className="about-values__icon">{value.icon}</span>
                <h3 className="about-values__title">{value.title}</h3>
                <p className="about-values__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section about-timeline bg-warm">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones That Define Us</h2>
          </div>
          <div className="about-timeline__track reveal">
            {milestones.map((milestone, index) => (
              <div key={index} className="about-timeline__item">
                <div className="about-timeline__marker">
                  <span className="about-timeline__year">{milestone.year}</span>
                </div>
                <div className="about-timeline__content">
                  <h3 className="about-timeline__title">{milestone.title}</h3>
                  <p className="about-timeline__description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section about-team">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate people behind Seth Spices who ensure quality in every grain.
            </p>
          </div>
          <div className="about-team__grid reveal">
            {team.map((member, index) => (
              <div key={index} className="about-team__card">
                <div className="about-team__image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section about-certifications gradient-warm">
        <div className="container">
          <div className="about-certifications__content reveal">
            <div className="about-certifications__text">
              <span className="section-label">Quality Assurance</span>
              <h2 className="section-title">Certified for Excellence</h2>
              <p>
                Our commitment to quality is backed by internationally recognized 
                certifications and rigorous testing protocols.
              </p>
              <Link to="/quality">
                <Button variant="primary">Learn About Our Quality Standards</Button>
              </Link>
            </div>
            <div className="about-certifications__badges">
              <div className="about-certifications__badge">
                <span className="about-certifications__badge-name">FSSAI</span>
                <span className="about-certifications__badge-full">Food Safety</span>
              </div>
              <div className="about-certifications__badge">
                <span className="about-certifications__badge-name">ISO 22000</span>
                <span className="about-certifications__badge-full">Certified</span>
              </div>
              <div className="about-certifications__badge">
                <span className="about-certifications__badge-name">HACCP</span>
                <span className="about-certifications__badge-full">Compliant</span>
              </div>
              <div className="about-certifications__badge">
                <span className="about-certifications__badge-name">APEDA</span>
                <span className="about-certifications__badge-full">Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta gradient-hero">
        <div className="container text-center">
          <div className="about-cta__content reveal">
            <h2 className="about-cta__title">Ready to Experience the Difference?</h2>
            <p className="about-cta__subtitle">
              Partner with us for premium quality spices that elevate every dish.
            </p>
            <div className="about-cta__buttons">
              <Link to="/products">
                <Button variant="gold" size="lg">Explore Products</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
