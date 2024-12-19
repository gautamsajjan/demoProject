import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart2.css';
import { assets } from '../../assets/assets';

function Cart2() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const handleStartShopping = () => {
    navigate('/consumer/Shop');
  };

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="cart2">
      <h2 className="cart2-title">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="cart2-empty">
          <img alt="empty-cart" src={assets.cart111} className="cart2-image" />
          <p className="cart2-message">Your cart is feeling lonely</p>
          <button className="cart2-button" onClick={handleStartShopping}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart2-items">
          <Cartinitial itemsInCart={cart} />
        </div>
      )}
    </div>
  );
}

export default Cart2;