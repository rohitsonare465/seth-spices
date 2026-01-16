import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  to,
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const classes = `btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
