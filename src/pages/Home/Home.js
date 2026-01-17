import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Chilli Powder',
      image: '/images/products/chilli.jpg',
      description: 'Vibrant red chilli powder with rich aroma and perfect heat',
      color: 'red'
    },
    {
      id: 2,
      name: 'Coriander Powder',
      image: '/images/products/coriander.jpg',
      description: 'Freshly ground coriander with citrusy, earthy notes',
      color: 'green'
    },
    {
      id: 3,
      name: 'Turmeric Powder',
      image: '/images/products/turmeric.jpg',
      description: 'Golden turmeric with high curcumin content',
      color: 'turmeric'
    },
    {
      id: 4,
      name: 'Garam Masala',
      image: '/images/products/mixed-masala.jpg',
      description: 'Traditional blend of warming aromatic spices',
      color: 'brown'
    },
    {
      id: 5,
      name: 'Garlic Powder',
      image: '/images/products/garlic.jpg',
      description: 'Pure garlic powder with intense, pungent flavor',
      color: 'cream'
    }
  ];

  const stats = [
    { value: '25+', label: 'Years of Excellence', icon: '🏆' },
    { value: '500+', label: 'Happy Clients', icon: '🤝' },
    { value: '40+', label: 'Countries Served', icon: '🌍' },
    { value: '100%', label: 'Pure & Natural', icon: '🌿' }
  ];

  const features = [
    {
      icon: '✨',
      title: '100% Pure Spices',
      description: 'No artificial colors, preservatives, or additives. Just pure, authentic Indian spices.'
    },
    {
      icon: '🔬',
      title: 'Lab Tested Quality',
      description: 'Every batch undergoes rigorous quality testing to ensure safety and purity standards.'
    },
    {
      icon: '🌾',
      title: 'Farm Fresh Sourcing',
      description: 'Direct partnerships with farmers across India for the freshest, finest spices.'
    },
    {
      icon: '📦',
      title: 'Hygienic Packaging',
      description: 'State-of-the-art packaging that preserves aroma and extends shelf life.'
    }
  ];

  const certifications = [
    { name: 'FSSAI', full: 'Food Safety Certified' },
    { name: 'ISO', full: 'ISO 22000:2018' },
    { name: 'HACCP', full: 'HACCP Certified' },
    { name: 'APEDA', full: 'Export Registered' }
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero gradient-hero">
        <div className="hero__bg-elements">
          <div className="hero__spice-element hero__spice-element--1"></div>
          <div className="hero__spice-element hero__spice-element--2"></div>
          <div className="hero__spice-element hero__spice-element--3"></div>
        </div>

        <div className="container">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-icon">👑</span>
              <span>Premium Export Quality</span>
            </div>

            <h1 className="hero__title">
              Experience the <br />
              <span className="text-gold">Royal Taste</span> from India
            </h1>

            <p className="hero__subtitle">
              Authentic Indian spices crafted with tradition, processed with precision.
              From the heart of India's spice gardens to kitchens worldwide.
            </p>

            <div className="hero__cta">
              <Button to="/products" variant="gold" size="large">
                Explore Our Range
              </Button>
              <Button to="/contact" variant="outline-white" size="large">
                Request Catalog
              </Button>
            </div>

            <div className="hero__trust">
              {certifications.map((cert, index) => (
                <div key={index} className="hero__trust-item">
                  <span className="hero__trust-name">{cert.name}</span>
                  <span className="hero__trust-full">{cert.full}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-stack">
              <div className="hero__main-image">
                <img
                  src="/images/hero-spices.jpg"
                  alt="Premium Indian spices collection"
                />
              </div>
              <div className="hero__floating-card hero__floating-card--1">
                <div className="hero__floating-icon">🌿</div>
                <div className="hero__floating-text">
                  <strong>100% Natural</strong>
                  <span>No Preservatives</span>
                </div>
              </div>
              <div className="hero__floating-card hero__floating-card--2">
                <div className="hero__floating-icon">✓</div>
                <div className="hero__floating-text">
                  <strong>Export Ready</strong>
                  <span>40+ Countries</span>
                </div>
              </div>
              <div className="hero__floating-card hero__floating-card--3">
                <div className="hero__floating-icon">⭐</div>
                <div className="hero__floating-text">
                  <strong>Since 1998</strong>
                  <span>Trusted Brand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <span>Scroll to explore</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats__item">
                <span className="stats__icon">{stat.icon}</span>
                <span className="stats__value">{stat.value}</span>
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Premium Range</span>
            <h2 className="section-title">Authentic Indian Spices</h2>
            <p className="section-subtitle">
              Handpicked from the finest farms, processed with care, delivered with pride.
            </p>
          </div>

          <div className="featured__grid reveal">
            {products.map((product) => (
              <Link to="/products" key={product.id} className={`featured__card featured__card--${product.color}`}>
                <div className="featured__image">
                  <img src={product.image} alt={product.name} />
                  <div className="featured__overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="featured__content">
                  <h3 className="featured__name">{product.name}</h3>
                  <p className="featured__description">{product.description}</p>
                  <div className="featured__tags">
                    <span>Pure</span>
                    <span>Export Quality</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="featured__cta reveal">
            <Button to="/products" variant="primary" size="large">
              View All Products →
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section gradient-warm">
        <div className="container">
          <div className="about-preview__grid reveal">
            <div className="about-preview__images">
              <div className="about-preview__image about-preview__image--main">
                <img
                  src="/images/spice-processing.jpg"
                  alt="Spice processing"
                />
              </div>
              <div className="about-preview__image about-preview__image--secondary">
                <img
                  src="/seth-spices-logo.png"
                  alt="Seth Spices Logo"
                />
              </div>
              <div className="about-preview__badge">
                <span className="about-preview__badge-value">25+</span>
                <span className="about-preview__badge-label">Years of Trust</span>
              </div>
            </div>

            <div className="about-preview__content">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">A Legacy of Purity & Tradition</h2>
              <p className="lead">
                Since 1998, Seth Spices has been synonymous with premium quality Indian spices.
                Our journey began with a simple mission – to share the authentic flavors of
                India with the world.
              </p>
              <p>
                From the sun-kissed farms of Kerala to the aromatic fields of Rajasthan,
                we source the finest spices and process them with utmost care. Every
                product that bears our name is a testament to our commitment to purity
                and excellence.
              </p>

              <div className="about-preview__features">
                <div className="about-preview__feature">
                  <span className="about-preview__feature-icon">🌾</span>
                  <span>Direct Farm Sourcing</span>
                </div>
                <div className="about-preview__feature">
                  <span className="about-preview__feature-icon">🏭</span>
                  <span>Modern Processing</span>
                </div>
                <div className="about-preview__feature">
                  <span className="about-preview__feature-icon">📋</span>
                  <span>Quality Certified</span>
                </div>
              </div>

              <Button to="/about" variant="outline" size="medium">
                Discover Our Story →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Seth Spices</span>
            <h2 className="section-title">The Seth Spices Difference</h2>
            <p className="section-subtitle">
              What makes us the preferred choice for discerning customers and export partners worldwide.
            </p>
          </div>

          <div className="why-choose__grid reveal">
            {features.map((feature, index) => (
              <div key={index} className="why-choose__card">
                <div className="why-choose__icon">{feature.icon}</div>
                <h3 className="why-choose__title">{feature.title}</h3>
                <p className="why-choose__description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="why-choose__cta reveal">
            <Button to="/why-us" variant="secondary" size="medium">
              Learn More About Our Quality →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section gradient-cta">
        <div className="container">
          <div className="cta-section__content reveal">
            <span className="cta-section__label">Ready to Partner?</span>
            <h2 className="cta-section__title">
              Let's Bring the Royal Taste of India to Your Business
            </h2>
            <p className="cta-section__subtitle">
              Whether you're a retailer, distributor, or food manufacturer, we have
              the perfect spice solutions for your needs.
            </p>
            <div className="cta-section__buttons">
              <Button to="/contact" variant="gold" size="large">
                Get in Touch
              </Button>
              <a
                href="https://wa.me/919755554650"
                className="cta-section__whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
