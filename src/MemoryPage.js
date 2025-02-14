import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft } from 'react-icons/fa'; // ไอคอนลูกศร
import { Link } from 'react-router-dom'; // นำเข้า Link
import './styles/MemoryPage.css';  // เชื่อมโยงกับไฟล์ CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import love1 from './assets/love1.jpg';
import love2 from './assets/love2.jpg';
import love3 from './assets/love3.jpg';
import love4 from './assets/love4.jpg';
import love5 from './assets/love5.jpg';
import love6 from './assets/love6.jpg';
import love7 from './assets/love7.jpg';
import love8 from './assets/love8.jpg';

const images = [love1, love2, love3, love4, love5, love6, love7, love8];

function MemoryPage() {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('May 24, 2024 00:00:00 GMT+0700').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000); // อัปเดตทุก 1 วินาที

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="memory-page">
      {/* ปุ่มย้อนกลับ */}
        <Link to="/menu" className="back-btn">
    <FaArrowLeft className="arrow-icon" />
  </Link>

      <h1>Memory Page🫶</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Love ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="time-elapsed-container">
        <h2>Time We've Been Together</h2>
        <div className="time-details">
          <div className="time-item">
            <span className="time-value">{timeElapsed.days}</span>
            <span className="unit">Days</span>
          </div>
          <div className="time-item">
            <span className="time-value">{timeElapsed.hours}</span>
            <span className="unit">Hours</span>
          </div>
          <div className="time-item">
            <span className="time-value">{timeElapsed.minutes}</span>
            <span className="unit">Minutes</span>
          </div>
          <div className="time-item">
            <span className="time-value">{timeElapsed.seconds}</span>
            <span className="unit">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryPage;
