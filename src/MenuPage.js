import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // ใช้ไอคอนจาก react-icons
import backgroundImage from './assets/2.jpg';

import './styles/MenuPage.css';

function MenuPage() {
  return (
    <div className="menu-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link to="/" className="back-btn">
        <FaArrowLeft className="arrow-icon" />
      </Link>
      <div className="menu-content">
        <h1 className="menu-title">Which one?</h1>
        <div className="menu-container">
          <Link to="/question" className="menu-item">Question?</Link>
          <Link to="/memory" className="menu-item">Memory🩷</Link>
          <Link to="/secret" className="menu-item">Secret!</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
