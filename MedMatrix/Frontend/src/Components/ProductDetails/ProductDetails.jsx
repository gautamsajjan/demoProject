
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayResults from '../../Components/DisplayResult/DisplayResult';
import './ProductDetails.css';

const ProductDetails = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        // Fetch related products by category
        const relatedResponse = await fetch(`http://localhost:5000/api/products/category/${categoryName}`);
        if (!relatedResponse.ok) {
          throw new Error('Failed to fetch related products');
        }
        const relatedData = await relatedResponse.json();
        setRelatedProducts(relatedData);

        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]); // Re-run effect when categoryName changes

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-details">
      <h3>Related Products in {categoryName} Category</h3>
      <div className="related-products">
        {relatedProducts?.length > 0 ? (
          relatedProducts.map((prod) => (
            <div key={prod._id} className="product-card">
              <h4>{prod.name}</h4>
              <img
                src={`http://localhost:5000/${prod.image}`} 
                alt={prod.name}
                className="product-image"
              />
              <p>{prod.description}</p>
              <p>Price: Rs. {prod.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No related products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
