import React from 'react';
import UseFetch from "../hooks/UseFetch";
import Loading from "../loading/Loading"; // تأكد من استيراد المكون Loading بشكل صحيح

export default function Contact() {
  const { data, error, isLoading } = UseFetch("https://dummyjson.com/products");

  return (
    <div className="container mt-4">
      {/* التحقق من حالة التحميل */}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        // عرض الخطأ إذا حدث
        <div className="alert alert-danger">Error: {error}</div>
      ) : (
        // عرض البيانات إذا تم جلبها بنجاح
        <div className="row">
          {data.products?.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={product.thumbnail} // الصورة الخاصة بالمنتج
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
