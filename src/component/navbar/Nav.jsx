import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
      
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* محتوى القائمة */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* استخدام ms-auto لتوزيع العناصر */}

              <li className="nav-item">
                <Link className="nav-link" to="/Categorey">Categorey</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Product">Product</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
