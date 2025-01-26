import React from 'react'
import axios from 'axios';
import Loading from '../loading/Loading.jsx';
import { useState ,useEffect } from 'react';


export default function UseFetch(url) {
  const[data,setData] =useState ({});
  const [error,setError]=useState (null);
  const [isloading,setIsloading]= useState (true);
  const getData = async () => {
    try {
      const response = await axios.get(url); // استدعاء API باستخدام Axios
      setData(response.data); // تحديث البيانات
      setError(null); // التأكد من عدم وجود أخطاء
    } catch (err) {
      setError(err.message); // تسجيل الخطأ
    } finally {
      setIsLoading(false); // انتهاء عملية التحميل
    }
  };
  useEffect (()=>{
getData()}, []);

  return (
   {data,error,isloading}
  )
}
