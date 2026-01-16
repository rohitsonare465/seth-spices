import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'medium',
  ...props 
}) => {
  const classes = `card ${hover ? 'card--hover' : ''} card--padding-${padding} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt, className = '' }) => (
  <div className={`card__image ${className}`}>
    <img src={src} alt={alt} />
  </div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`card__content ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, as: Tag = 'h3', className = '' }) => (
  <Tag className={`card__title ${className}`}>
    {children}
  </Tag>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`card__description ${className}`}>
    {children}
  </p>
);

export default Card;
