import React from 'react';
import { useParams } from 'react-router-dom';
import UseFetch from '../hooks/UseFetch';

export default function ProductDetail() {
  const { id } = useParams(); // استخراج المعرف من الرابط
  const { data, isLoading, error } = UseFetch(`https://dummyjson.com/products/${id}`); // استخدام hook لجلب البيانات

  // أثناء التحميل
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // عند حدوث خطأ
  if (error) {
    return <div>Error: {error}</div>;
  }

  // عند تحميل البيانات بنجاح
  return (
    <div className="container my-5">
      <h1 className="text-center">{data.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3>Price: ${data.price}</h3>
          <p className="lead">{data.description}</p>
          <h5>Category: {data.category}</h5>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
