import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../loading/Loading';
import Details from '../product/ProductDetail';

const CategoryPage = () => {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);   
  const [error, setError] = useState(null);  

  const fetchCategoryProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      setProducts(response.data.products); // تخزين المنتجات القادمة
      setError(null); // تصفير الخطأ
    } catch (err) {
      setError(err.message); // حفظ رسالة الخطأ
    } finally {
      setIsLoading(false); // إيقاف حالة التحميل
    }
  };

  // استدعاء الدالة عند تغيير الفئة
  useEffect(() => {
    fetchCategoryProducts();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Loading /> // استخدام مكون التحميل المخصص
      ) : error ? (
        <div className="alert alert-danger text-center">Error: {error}</div> // حالة الخطأ
      ) : (
        <div>
          <h2 className="bg-danger bg-gradient text-white p-3 d-flex justify-content-center">
            {category}
          </h2>
          <ul className="list-unstyled vh-100">
            {products.map((product) => (
              <li key={product.id} className="bg-light p-2 mb-2 rounded d-flex justify-content-between align-items-center">
                <span>{product.title}</span>
                <Link
                  to={`/product/${product.id}`} // الرابط إلى صفحة تفاصيل المنتج
                  className="btn btn-danger btn-sm"
                >
                  More Details
                </Link>
                
              </li>
            ))}
          </ul>
        </div>
        
      )}
    </>
  );
};

export default CategoryPage;
