import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Category() {
  const [categories, setCategories] = useState([]); // State to store categories
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/category-list');
      setCategories(response.data); // Set fetched categories
      setError(null); // Reset error state
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  // Call fetchCategories when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-center">Loading...</div> // Loading state
      ) : error ? (
        <div className="alert alert-danger text-center">Error: {error}</div> // Error state
      ) : (
        <div className="vh-100">
          <ul className="d-flex flex-wrap justify-content-start align-items-center">
            {categories.map((category, index) => (
              <li key={index} className="bg-dark bg-gradient text-white rounded p-3 m-2" style={{ flex: "1 1 calc(33.33% - 1rem)" }}>
                <Link to={`/category/${category}`} className="text-white text-decoration-none">
                  {category}
                </Link>
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
