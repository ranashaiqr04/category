import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loading() {
  return (
    <>
      <div className="placeholder-glow">
        <span className="placeholder col-6"></span>
        <span className="placeholder w-75"></span>
        <span className="placeholder" style={{ width: '25%' }}></span>
      </div>
    </>
  );
}
