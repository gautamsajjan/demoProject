import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyProducts.css';
import { assets } from '../../assets/assets';
import AddPopUp from '../../Components/AddPopUp/AddPopUp';
import List from '../../Components/List/List';
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

const MyProducts = () => {

  const category = [
    {
      id: 1,
      imgSrc: painReliefImage,
      title: "Pain Relief Medications",
      description: "Find relief with a range of pain management medications, offering both over-the-counter and prescription options for a variety of conditions.",
      btn: "Add Product",
    },
    {
      id: 2,
      imgSrc: coldAndFluImage,
      title: "Cold & Flu Medications",
      description: "Stock up on essential medications for cold and flu symptoms, including decongestants, cough suppressants, and fever reducers.",
      btn: "Add Product",
    },
    {
      id: 3,
      imgSrc: antibioticsImage,
      title: "Antibiotics",
      description: "Find effective antibiotics for a wide range of bacterial infections. Choose from oral, topical, and injectable options.",
      btn: "Add Product",
    },
    {
      id: 4,
      imgSrc: allergyImage,
      title: "Allergy Medications",
      description: "Explore allergy relief medications, from antihistamines to nasal sprays, to help manage seasonal or year-round allergies.",
      btn: "Add Product",
    },
    {
      id: 5,
      imgSrc: digestiveHealthImage,
      title: "Digestive Health Products",
      description: "Support your digestive system with medications for heartburn, bloating, constipation, and other gastrointestinal issues.",
      btn: "Add Product",
    },
    {
      id: 6,
      imgSrc: cardiovascularImage,
      title: "Cardiovascular Medications",
      description: "Find medications to support heart health, including blood pressure medications, cholesterol-lowering drugs, and heart disease treatments.",
      btn: "Add Product",
    },
    {
      id: 7,
      imgSrc: diabetesImage,
      title: "Diabetes Medications",
      description: "Manage your diabetes with medications, insulin options, and glucose-lowering treatments for a healthy lifestyle.",
      btn: "Add Product",
    },
    {
      id: 8,
      imgSrc: topicalMedicationsImage,
      title: "Topical Medications",
      description: "Explore a range of topical medications for skin conditions, wounds, burns, and other localized treatments.",
      btn: "Add Product",
    },
    {
      id: 9,
      imgSrc: mentalHealthImage,
      title: "Mental Health Medications",
      description: "Support mental well-being with medications for conditions like anxiety, depression, and sleep disorders.",
      btn: "Add Product",
    },
    {
      id: 10,
      imgSrc: eyeCareImage,
      title: "Eye Care Medications",
      description: "Care for your eyes with medications for dry eyes, infections, and other vision-related issues.",
      btn: "Add Product",
    },
  ];

  const [addpop, setAddPop] = useState(false);
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/products', {
        method: 'GET',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
    'Content-Type': 'application/json',
  },
      });
      setProducts(response.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const handlePopupOpen = () => {
    setAddPop(true);
  };

  const handlePopupClose = () => {
    setAddPop(false);
  };

  const handleAddProduct = async (productData) => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();

      for (const key in productData) {
        formData.append(key, productData[key]);
      }

      if (editIndex !== null) {
        const response = await axios.put(
          `http://localhost:5000/api/products/edit/${products[editIndex]._id}`,
          productData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const updatedProducts = [...products];
        updatedProducts[editIndex] = response.data.product;
        setProducts(updatedProducts);
        setEditIndex(null);
      } else {
        const response = await axios.post('http://localhost:5000/api/products/add',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data', // Important for file uploads
            },
          }
        );
        setProducts((prevProducts) => [...prevProducts, response.data.product]);
      }
      setAddPop(false);
    } catch (err) {
      console.error('Failed to save product:', err);
    }
  };

  const handleDelete = async (index) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/products/delete/${products[index]._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    } catch (err) {
      console.error('Failed to delete product:', err);
    }
  };

  return (
    <div className="My-Products">
      <div className='Products'>
        <div className='bg'>
          <div className='txt2'>
            <p>Your Produce
              <br />Your Price
              <br />Your Marketplace</p>
          </div>
          <div className='img1'>
            <img src={assets.backimg} alt="background" />
          </div>
        </div>
      </div>
      <div className='plist' id='product-list'>
        <section className="box">
          {category.map((article) => (
            <article key={article.id}>
              <div className="article-wrapper">
                <figure>
                  <img src={article.imgSrc} alt={article.title} />
                </figure>
                <div className="article-body">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <br />
                  <br />
                  <button onClick={handlePopupOpen}>{article.btn}</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
      {addpop && (
        <AddPopUp
          onClose={() => setAddPop(false)}
          onAddProduct={handleAddProduct}
          product={editProduct}
        />
      )}
      <List
        products={products}
        onEdit={(index) => {
          setEditIndex(index);
          setEditProduct(products[index]);
          setAddPop(true);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MyProducts;
