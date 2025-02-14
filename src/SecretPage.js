import React, { useEffect } from 'react';
import './styles/SecretPage.css';
import songImage from './assets/song.gif';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SecretPage() {
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    const iframeSrc = iframe.getAttribute('src');
    
    // เปลี่ยนแค่เมื่อ iframe ยังไม่ได้โหลด
    if (iframe && !iframeSrc.includes('auto_play=true')) {
      iframe.src = iframeSrc + '&auto_play=true'; // เพิ่ม auto_play ให้กับ iframe
    }
  }, []);

  return (
    <div className="page">
      <Link to="/menu" className="back-btn">
        <FaArrowLeft className="arrow-icon" />
      </Link>
      <div className="page-content">
        <h1>Shhh... This is our secret!</h1>
        
        {/* ข้อความที่ค่อยๆ ปรากฏ */}
        <p>ถ้าเราทะเลาะกัน เธอผิด!</p>
        
        {/* เพิ่มภาพ song.gif */}
        <div className="song-image-container">
          <img src={songImage} alt="Song" className="song-image" />
        </div>

        {/* เพิ่ม iframe สำหรับเล่นเพลงจาก SoundCloud */}
        <iframe
          width="1%"
          height="1"
          src="https://www.youtube.com/embed/GQ4e5UtUT-s?autoplay=1&mute=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>


      </div>
    </div>
  );
}

export default SecretPage;
