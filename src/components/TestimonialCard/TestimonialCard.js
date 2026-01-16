import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ 
  quote,
  author,
  role,
  company,
  image,
  rating = 5
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`testimonial-card__star ${i < rating ? 'active' : ''}`}>
            ★
          </span>
        ))}
      </div>
      <blockquote className="testimonial-card__quote">
        "{quote}"
      </blockquote>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">
          {image ? (
            <img src={image} alt={author} />
          ) : (
            <span>{author.charAt(0)}</span>
          )}
        </div>
        <div className="testimonial-card__info">
          <p className="testimonial-card__name">{author}</p>
          <p className="testimonial-card__role">
            {role}{company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
