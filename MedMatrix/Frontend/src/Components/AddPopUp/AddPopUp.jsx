import React, { useState, useEffect } from 'react';
import './AddPopUp.css';
import { assets } from '../../assets/assets';

const AddPopUp = ({ onClose, onAddProduct, product }) => {
    const [image, setImage] = useState(product ? product.image : null);

    useEffect(() => {
        if (product) {
            setImage(product.image);
        }
    }, [product]);

    const handleClose = (event) => {
        event.preventDefault();
        if (onClose) onClose();
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]); // Set the selected file
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {
            image,
            name: e.target.name.value.trim(),
            description: e.target.description.value.trim(),
            category: e.target.category.value.trim(),
            dose: e.target.dose ? e.target.dose.value.trim() : '',
            price: parseFloat(e.target.price.value),
            quantity: e.target.quantity.value.trim(),
            
        };

        
        if (onAddProduct) {
            onAddProduct(productData);  
        }

        
        if (onClose) {
            onClose();  
        }
    };

    const renderImagePreview = () => {
        if (image instanceof File || image instanceof Blob) {
            return URL.createObjectURL(image);
        } else if (typeof image === 'string') {
            return image;
        } else {
            return assets.upimg;
        }
    };

    return (
        <div className="add">
            <form onSubmit={handleSubmit} className="pop" method="POST">
                <button className="close-btn" onClick={handleClose}>✖</button>
                <div className="upload-img">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img
                            src={renderImagePreview()}
                            alt="Upload image"
                        />
                    </label>
                    <input onChange={handleImageChange} type="file" id="image" hidden />
                </div>
                <div className="p-name">
                    <p>Product Name</p>
                    <input type="text" name="name" placeholder="e.g. Paracetamol" defaultValue={product ? product.name : ''} required />
                </div>
                <div className="p-description">
                    <p>Product Description</p>
                    <textarea name="description" rows="2" placeholder="Describe your Product" defaultValue={product ? product.description : ''} required></textarea>
                </div>
                <div className="p-category">
                    <p>Product Category</p>
                    <select name="category" defaultValue={product ? product.category : ''} required>
                        <option value="pain-relief-medications">Pain Relief Medications</option>
                        <option value="cold-&-flu-medications">Cold & Flu Medications</option>
                        <option value="antibiotics">Antibiotics</option>
                        <option value="allergy-medications">Allergy Medications</option>
                        <option value="digestive-health-products">Digestive Health Products</option>
                        <option value="cardiovascular-medications">Cardiovascular Medications</option>
                        <option value="diabetes-medications">Diabetes Medications</option>
                        <option value="topical-medications">Topical Medications</option>
                        <option value="mental-health-medications">Mental Health Medications</option>
                        <option value="eye-care-medications">Eye Care Medications</option>
                    </select>
                </div>
                <div className="p-dose">
                    <p>Product Dose</p>
                    <input type="text" name="dose" placeholder="e.g. 500mg" defaultValue={product ? product.dose : ''} required />
                </div>
                <div className="ppstock">
                    <div className="p-price">
                        <p>Product Price</p>
                        <input type="number" name="price" placeholder="e.g. Rs.100/tablet" defaultValue={product ? product.price : ''} required />
                    </div>
                    <div className="p-stock">
                        <p>Product Quantity</p>
                        <input type="text" name="quantity" placeholder="e.g. 50 tablet" defaultValue={product ? product.quantity : ''} required />
                    </div>
                </div>
                <button type="submit" className="btn1">Add Product</button>
            </form>
        </div>
    );
};

export default AddPopUp;