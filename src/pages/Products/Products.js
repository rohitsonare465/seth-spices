import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'ground', name: 'Ground Spices' },
    { id: 'whole', name: 'Whole Spices' },
    { id: 'blends', name: 'Spice Blends' },
    { id: 'seasonings', name: 'Seasonings' }
  ];

  const products = [
    {
      id: 1,
      name: 'Asafoetida (Hing)',
      hindiName: 'हींग',
      description: 'Premium quality asafoetida with strong aroma and authentic flavor. Essential for tempering dals and vegetarian dishes.',
      image: '/images/products/hing.jpg',
      category: 'seasonings',
      color: 'turmeric',
      features: ['Strong Aroma', 'Pure Quality'],
      packSizes: ['10g', '25g', '50g', '100g'],
      origin: 'Premium Grade'
    },
    {
      id: 2,
      name: 'Cardamom (Elaichi)',
      hindiName: 'इलायची',
      description: 'Aromatic green cardamom pods with intense, sweet flavor. Perfect for desserts, chai, and biryanis.',
      image: '/images/products/cardamom.jpg',
      category: 'whole',
      color: 'green',
      features: ['Aromatic', 'Hand Selected'],
      packSizes: ['25g', '50g', '100g', '250g'],
      origin: 'Kerala & Guatemala'
    },
    {
      id: 3,
      name: 'Chilli (Lal Mirchi)',
      hindiName: 'लाल मिर्च',
      description: 'Premium red chilli powder with vibrant color and balanced heat. Made from finest Guntur and Kashmiri varieties.',
      image: '/images/products/chilli.jpg',
      category: 'ground',
      color: 'red',
      features: ['No Added Color', 'Perfect Heat'],
      packSizes: ['100g', '200g', '500g', '1kg'],
      origin: 'Guntur, Andhra Pradesh'
    },
    {
      id: 4,
      name: 'Cinnamon (Dalchini)',
      hindiName: 'दालचीनी',
      description: 'Premium quality cinnamon sticks with sweet, warm aroma. Ideal for curries, desserts, and beverages.',
      image: '/images/products/cinnamon.jpg',
      category: 'whole',
      color: 'primary',
      features: ['Sweet Aroma', 'Premium Bark'],
      packSizes: ['50g', '100g', '250g', '500g'],
      origin: 'Sri Lanka & Kerala'
    },
    {
      id: 5,
      name: 'Cloves (Laung)',
      hindiName: 'लौंग',
      description: 'Handpicked whole cloves with intense aroma and flavor. Essential spice for garam masala and biryanis.',
      image: '/images/products/cloves.jpg',
      category: 'whole',
      color: 'primary',
      features: ['Intense Flavor', 'Hand Picked'],
      packSizes: ['25g', '50g', '100g', '250g'],
      origin: 'Kerala & Madagascar'
    },
    {
      id: 6,
      name: 'Coriander (Dhania)',
      hindiName: 'धनिया',
      description: 'Aromatic coriander powder with fresh citrusy notes. Stone ground from select Rajasthani dhania seeds.',
      image: '/images/products/coriander.jpg',
      category: 'ground',
      color: 'green',
      features: ['Stone Ground', 'Fresh Aroma'],
      packSizes: ['100g', '200g', '500g', '1kg'],
      origin: 'Rajasthan'
    },
    {
      id: 7,
      name: 'Cumin (Zeera)',
      hindiName: 'जीरा',
      description: 'Premium cumin seeds and powder with warm, earthy aroma. Essential for tempering and spice blends.',
      image: '/images/products/cumin.jpg',
      category: 'ground',
      color: 'primary',
      features: ['Fresh Ground', 'High Oil Content'],
      packSizes: ['100g', '200g', '500g', '1kg'],
      origin: 'Gujarat & Rajasthan'
    },
    {
      id: 8,
      name: 'Dried Mango Powder (Amchur)',
      hindiName: 'अमचूर',
      description: 'Tangy dried mango powder made from premium raw mangoes. Adds authentic sour flavor to chaats and curries.',
      image: '/images/products/amchur.jpg',
      category: 'ground',
      color: 'turmeric',
      features: ['Tangy Flavor', '100% Natural'],
      packSizes: ['50g', '100g', '200g', '500g'],
      origin: 'Uttar Pradesh'
    },
    {
      id: 9,
      name: 'Fenugreek (Methi)',
      hindiName: 'मेथी',
      description: 'Premium fenugreek seeds with slightly bitter, aromatic flavor. Essential for pickles and South Indian dishes.',
      image: '/images/products/fenugreek.jpg',
      category: 'whole',
      color: 'turmeric',
      features: ['Aromatic', 'Premium Seeds'],
      packSizes: ['100g', '200g', '500g', '1kg'],
      origin: 'Rajasthan'
    },
    {
      id: 10,
      name: 'Garlic (Lahsun)',
      hindiName: 'लहसुन',
      description: 'Dehydrated garlic powder and flakes with intense flavor. Perfect for convenient cooking and marinades.',
      image: '/images/products/garlic.jpg',
      category: 'ground',
      color: 'primary',
      features: ['Pure Garlic', 'No Additives'],
      packSizes: ['50g', '100g', '200g', '500g'],
      origin: 'Madhya Pradesh'
    },
    {
      id: 11,
      name: 'Mixed Masala',
      hindiName: 'मिक्स मसाला',
      description: 'Traditional blend of premium spices including garam masala, kitchen king, and sabji masala. Perfect for everyday cooking.',
      image: '/images/products/mixed-masala.jpg',
      category: 'blends',
      color: 'primary',
      features: ['Traditional Recipe', 'Versatile Use'],
      packSizes: ['50g', '100g', '200g', '500g'],
      origin: 'Seth Spices Blend'
    },
    {
      id: 12,
      name: 'Mustard (Rai/Sarson)',
      hindiName: 'राई / सरसों',
      description: 'Premium yellow and black mustard seeds with sharp, pungent flavor. Essential for tempering and pickles.',
      image: '/images/products/mustard.jpg',
      category: 'whole',
      color: 'turmeric',
      features: ['Sharp Flavor', 'High Oil Content'],
      packSizes: ['100g', '200g', '500g', '1kg'],
      origin: 'Rajasthan & Gujarat'
    },
    {
      id: 13,
      name: 'Seasoning Blends',
      hindiName: 'सीज़निंग',
      description: 'Premium seasoning blends for various cuisines including chat masala, pav bhaji masala, and special seasonings.',
      image: '/images/products/seasoning.jpg',
      category: 'seasonings',
      color: 'red',
      features: ['Flavor Packed', 'Ready to Use'],
      packSizes: ['50g', '100g', '200g', '500g'],
      origin: 'Seth Spices Blend'
    },
    {
      id: 14,
      name: 'Turmeric (Haldi)',
      hindiName: 'हल्दी',
      description: 'High-curcumin turmeric powder with deep golden color and earthy flavor. Lab tested for purity and quality.',
      image: '/images/products/turmeric.jpg',
      category: 'ground',
      color: 'turmeric',
      features: ['High Curcumin', 'Lab Tested'],
      packSizes: ['100g', '200g', '500g', '1kg'],
      origin: 'Erode, Tamil Nadu'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero gradient-hero">
        <div className="container">
          <div className="products-hero__content reveal">
            <span className="products-hero__badge">
              <span className="products-hero__badge-icon">🌶️</span>
              Our Collection
            </span>
            <h1 className="products-hero__title">
              Premium Indian<br />
              <span className="text-gold">Spices & Blends</span>
            </h1>
            <p className="products-hero__subtitle">
              Discover our range of pure, authentic spices sourced directly from
              India's finest spice-growing regions. Available in multiple pack sizes
              for retail and bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section products-catalog">
        <div className="container">
          {/* Filter */}
          <div className="products-filter reveal">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`products-filter__btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid reveal">
            {filteredProducts.map((product, index) => (
              <article
                key={product.id}
                className={`product-card product-card--${product.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-card__overlay">
                    <span>View Details</span>
                  </div>
                  <div className="product-card__badges">
                    {product.features.map((feature, i) => (
                      <span key={i} className="product-card__badge">{feature}</span>
                    ))}
                  </div>
                </div>
                <div className="product-card__content">
                  <span className="product-card__origin">📍 {product.origin}</span>
                  <h3 className="product-card__name">{product.name}</h3>
                  {product.hindiName && (
                    <span className="product-card__hindi">{product.hindiName}</span>
                  )}
                  <p className="product-card__description">{product.description}</p>
                  <div className="product-card__sizes">
                    <span className="product-card__sizes-label">Available:</span>
                    <div className="product-card__sizes-list">
                      {product.packSizes.map((size, i) => (
                        <span key={i} className="product-card__size">{size}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/919755554650?text=Hi, I'm interested in ${product.name}`}
                    className="product-card__inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="section products-bulk gradient-warm">
        <div className="container">
          <div className="products-bulk__grid reveal">
            <div className="products-bulk__content">
              <span className="section-label">For Businesses</span>
              <h2 className="section-title">Bulk & Export Orders</h2>
              <p>
                Looking for bulk quantities for your business, restaurant, or export needs?
                We offer competitive pricing for large orders with customized packaging options.
              </p>
              <ul className="products-bulk__list">
                <li>✓ Custom packaging with your branding</li>
                <li>✓ Private labeling options</li>
                <li>✓ Competitive bulk pricing</li>
                <li>✓ Export-ready documentation</li>
                <li>✓ International shipping to 40+ countries</li>
              </ul>
              <Link to="/contact">
                <Button variant="primary" size="lg">Request Bulk Quote</Button>
              </Link>
            </div>
            <div className="products-bulk__image">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=500&fit=crop" alt="Bulk spices" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section products-quality">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Our Promise</span>
            <h2 className="section-title">Quality You Can Trust</h2>
            <p className="section-subtitle">
              Every product goes through rigorous quality checks before reaching you.
            </p>
          </div>
          <div className="products-quality__grid reveal">
            <div className="products-quality__item">
              <span className="products-quality__icon">🔬</span>
              <h3>Lab Tested</h3>
              <p>Every batch tested for purity, contaminants, and quality parameters.</p>
            </div>
            <div className="products-quality__item">
              <span className="products-quality__icon">🌿</span>
              <h3>100% Natural</h3>
              <p>No artificial colors, flavors, or preservatives. Just pure spices.</p>
            </div>
            <div className="products-quality__item">
              <span className="products-quality__icon">📦</span>
              <h3>Fresh Packaging</h3>
              <p>Vacuum-sealed packaging to preserve freshness and aroma.</p>
            </div>
            <div className="products-quality__item">
              <span className="products-quality__icon">✓</span>
              <h3>Certified</h3>
              <p>FSSAI, ISO, and HACCP certified for international standards.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/quality">
              <Button variant="outline">Learn More About Our Quality</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section products-cta gradient-hero">
        <div className="container text-center">
          <div className="products-cta__content reveal">
            <h2 className="products-cta__title">Ready to Order?</h2>
            <p className="products-cta__subtitle">
              Get in touch with us for pricing, samples, or any questions about our products.
            </p>
            <div className="products-cta__buttons">
              <a
                href="https://wa.me/919755554650?text=Hi, I'm interested in your spices"
                className="products-cta__whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
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

export default Products;
