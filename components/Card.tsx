import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({ children, className = '', as: Component = 'div' }) => {
  return (
    <Component className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {children}
    </Component>
  );
};

export default Card;