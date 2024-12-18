


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Productcard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigating to the product details page with product info
    navigate(`/customer/product/${product.name}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
    </div>
  );
};

export default ProductCard;
