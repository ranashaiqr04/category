import React from 'react'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './component/home/Home.jsx';
import Nav from "./component/navbar/Nav.jsx";
import About from "./component/about/About.jsx";
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Categorey from './component/categorey/Categorey.jsx';
import CategoryPage from './component/page/CategoryPage.jsx';
export default function App() {
  return (
   <>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Categorey' element={<Categorey/>}></Route>
    <Route path="/category/:category" element={<CategoryPage />} />



   </Routes>
   <Footer/>
   </>
  )
}
