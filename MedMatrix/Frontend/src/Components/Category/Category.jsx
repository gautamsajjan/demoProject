import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

import painReliefImage from '../../assets/painrelief.jpeg';
import coldAndFluImage from '../assets/synax-tablets.jpg';
import antibioticsImage from '../assets/antibiotic.jpg';
import allergyImage from '../assets/allergy.jpg';
import digestiveHealthImage from '../assets/digestive.jpg';
import cardiovascularImage from '../assets/cardiovascular.jpg';
import diabetesImage from '../assets/diabeties.jpg';
import topicalMedicationsImage from '../assets/topical medications.jpg';
import mentalHealthImage from '../assets/mentalhealth.jpg';
import eyeCareImage from '../../assets/eyecare.jpg';


const medicineCategories = [
  { name: "Pain Relief Medications", image:  painReliefImage },
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

export default function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('Shop', { state: { category: category.name } });
  };

  return (
    <div className="container">
      <h1 className="header">Welcome to Our Categories!</h1>
      <div className="categories">
        {medicineCategories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src={category.image} 
              alt={`Image of ${category.name}`}
              className="category-image"
            />
            <h2 className="category-name">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
