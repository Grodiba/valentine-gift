import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // ไฟล์ CSS สำหรับหน้าแรก
import MenuPage from './MenuPage'; // นำเข้า MenuPage
import QuestionPage from './QuestionPage'; // นำเข้า QuestionPage
import MemoryPage from './MemoryPage'; // นำเข้า MemoryPage
import SecretPage from './SecretPage'; // นำเข้า SecretPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/memory" element={<MemoryPage />} /> 
        <Route path="/secret" element={<SecretPage />} /> 
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="heart-container">
          <img src={require('./assets/loveja.png')} alt="Heart" className="heart-image" />
        </div>
        <h1 className="title">Welcome to My Valentine Gift!</h1>
        <Link to="/menu">
          <button className="start-btn">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
