


import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom'; // Use useParams and useLocation
import axios from 'axios'; // For fetching data
import './Shop.css';
import Bgshop from '../../Components/bgshop/bgshop';

import painReliefImage from '../../assets/painrelief.jpeg';
import coldAndFluImage from '../../assets/synax-tablets.jpg';
import antibioticsImage from '../../assets/antibiotic.jpg';
import allergyImage from '../../assets/allergy.jpg';
import digestiveHealthImage from '../../assets/digestive.jpg';
import cardiovascularImage from '../../assets/cardiovascular.jpg';
import diabetesImage from '../../assets/diabeties.jpg';
import topicalMedicationsImage from '../../assets/topical medications.jpg';
import mentalHealthImage from '../../assets/mentalhealth.jpg';
import eyeCareImage from '../../assets/eyecare.jpg';

const categories = [
  { name: "Pain Relief Medications", image: painReliefImage },
  { name: "Cold & Flu Medications", image: coldAndFluImage },
  { name: "Antibiotics", image: antibioticsImage },
  { name: "Allergy Medications", image: allergyImage },
  { name: "Digestive Health Products", image: digestiveHealthImage },
  { name: "Cardiovascular Medications", image: cardiovascularImage },
  { name: "Diabetes Medications", image: diabetesImage },
  { name: "Topical Medications", image: topicalMedicationsImage },
  { name: "Mental Health Medications", image: mentalHealthImage },
  { name: "Eye Care Medications", image: eyeCareImage },
];

const Shop = () => {
  const { categoryName } = useParams(); // Get category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get current location

  // Fetch products when categoryName exists
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (categoryName) {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:5000/api/products/category/${categoryName}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    // Trigger fetch only if categoryName exists
    fetchProductsByCategory();
  }, [categoryName]); // Re-run when categoryName changes


  return (
    <div className="shop">
      {/* Display categories if no category is selected (i.e., URL is /customer/Shop) */}
      {!categoryName && location.pathname === "/customer/Shop" && (
        <div className="shop-container">
          <div className="shop-header">
            <Bgshop /><br /><br />
            <h2>Welcome to Categories</h2>
          </div>
          <div className="product-list">
            {categories.map((cat, index) => {
              const categoryUrl = cat.name.toLowerCase().replace(/\s+/g, '-'); // Format category name for URL

              return (
                <div key={index} className="product-card">
                  <Link to={`/customer/Shop/${categoryUrl}`}>
                    <img src={cat.image} alt={cat.name} className="product-image" />
                  </Link>
                  <h3 className="product-name">{cat.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Display products if a category is selected */}
      {categoryName && (
        <div>
          <div className="shop-header">
            <Bgshop /><br /><br />
            <h2>Products in {categoryName.replace('-', ' ').toUpperCase()} Category</h2>
          </div>
          <div className="product-list">
            {products.length === 0 ? (
              <p>No products found in this category.</p>
            ) : (
              products.map((product) => (
                <div key={product._id} className="product-card">
                  <img src={`http://localhost:5000/${product.image}`} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: Rs. {product.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;

