import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // ไฟล์ CSS สำหรับหน้าแรก
import MenuPage from './MenuPage'; // นำเข้า MenuPage
import QuestionPage from './QuestionPage'; // นำเข้า QuestionPage
import MemoryPage from './MemoryPage'; // นำเข้า MemoryPage (กรณีต้องการให้มีหน้า Memory)
import SecretPage from './SecretPage'; // นำเข้า SecretPage (กรณีต้องการให้มีหน้า Secret)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/memory" element={<MemoryPage />} /> {/* เพิ่มเส้นทางใหม่ */}
        <Route path="/secret" element={<SecretPage />} /> {/* เพิ่มเส้นทางใหม่ */}
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
        <h1 className="title">Welcome to My Valentine Gift! <br /> for Boom</h1>
        <Link to="/menu">
          <button className="start-btn">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
