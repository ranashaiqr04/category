import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../loading/Loading';

const CategoryPage = () => {
  const { category } = useParams(); // استخراج اسم الفئة من الرابط
  const [products, setProducts] = useState([]); // تخزين المنتجات
  const [isLoading, setIsLoading] = useState(true); // حالة التحميل
  const [error, setError] = useState(null); // حالة الخطأ

  // دالة لجلب المنتجات حسب الفئة
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
              <li key={product.id} className="bg-light p-2 mb-2 rounded">
                {product.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
