


import React from 'react';
import './Shop.css';
import ProductCard from '../../Components/Productcard/Productcard';
import Bgshop from '../../Components/bgshop/bgshop';
import { useLocation, useNavigate } from 'react-router-dom';
import appleImage from '../../assets/apple.png';
import bananaImage from '../../assets/banana.png';
import broccoliImage from '../../assets/broccoli.png';
import brownriceImage from '../../assets/brownrice.png';
import chickenImage from '../../assets/chicken.png';
import eggImage from '../../assets/egg.png';
import gheeImage from '../../assets/ghee.png';
import honeyImage from '../../assets/honey.png';
import lapsiImage from '../../assets/lapsi.png';
import yogurtImage from '../../assets/yogurt.png';
import milkImage from '../../assets/milk.png';
import muttonImage from '../../assets/mutton.png';
import onionImage from '../../assets/onion.png';
import orangeImage from '../../assets/orange.png';
import tomatoImage from '../../assets/tomato.png';
import wheattImage from '../../assets/wheatt.png';
import wholeoatImage from '../../assets/wholeoat.png';
import spicesImage from '../../assets/spices.png';


const products = {
  "Fruits": [
    { name: "Apple", image: appleImage },
    { name: "Banana", image: bananaImage },
    { name: "Orange", image: orangeImage},
  ],
  "Vegetables": [
    { name: "Broccoli", image: broccoliImage },
    { name: "Tomato", image: tomatoImage },
    { name: "Onion", image: onionImage},
  ],
  "Grains": [
    { name: "Brown Rice", image: brownriceImage },
    { name: "Wheat", image: wheattImage},
    { name: "Whole Oats", image: wholeoatImage},
  ],
  "Dairy": [
    { name: "Milk", image: milkImage },
    { name: "Yogurt", image: yogurtImage },
    { name: "Ghee", image:gheeImage},
  ],
  "Meat & Poultry": [
    { name: "Chicken", image: chickenImage },
    { name: "Mutton", image: muttonImage },
    { name: "Eggs", image: eggImage},
  ],
  "Other Products": [
    { name: "Honey", image: honeyImage },
    { name: "Lapsi Pickle", image: lapsiImage },
    { name: "Spices", image: spicesImage},
  ],
};

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};

  const renderCategoryProducts = () => (
    <div className="shop-container">
      <div className="shop-header">
        <Bgshop /><br /><br /><br />
        <h2>Selected Category: {category}</h2>
        <button className="back-button" onClick={() => navigate('/consumer')}>Back to Categories</button>
      </div>
      <div className="product-list">
        {products[category].map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );

  const renderAllProducts = () => {
    const allProducts = Object.values(products).flat();
    return (
      <div className="shop-container">
        <div className="shop-header">
          <Bgshop />
          <br/><br/><br/>
          <h2>All Products</h2>
          <button className="back-button" onClick={() => navigate('/consumer')}>Back to Homepage</button>
        </div>
        <div className="product-list">
          {allProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="shop">
      {category && products[category] ? renderCategoryProducts() : renderAllProducts()}
    </div>
  );
};

export default Shop;