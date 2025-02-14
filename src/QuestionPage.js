import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // ใช้ไอคอนจาก react-icons
import backgroundImage from './assets/2.jpg';
import './styles/QuestionPage.css';

const QuestionPage = () => {
  const [answer, setAnswer] = useState('');
  const [showHearts, setShowHearts] = useState(false); // state สำหรับแสดงหัวใจ
  const [hearts, setHearts] = useState([]); // array สำหรับเก็บหัวใจ

  const handleAnswerSelection = (selectedAnswer) => {
    setAnswer(selectedAnswer);

    if (selectedAnswer === 'Yup💕') {
      alert('I am sexy and I know it 😘');
      setShowHearts(true); // เริ่มแสดงหัวใจเมื่อเลือก "Yup💕"
    } else {
      alert('WTF?');
      setShowHearts(false); // ถ้าไม่ตอบ "Yup💕" จะไม่แสดงหัวใจ
    }
  };

  useEffect(() => {
    if (showHearts) {
      const heartInterval = setInterval(() => {
        setHearts((prevHearts) => [
          ...prevHearts,
          { id: prevHearts.length, top: Math.random() * 100 + 'vh', left: Math.random() * 100 + 'vw', size: Math.random() * 20 + 10 }
        ]);
      }, 100); // ทุก 100ms จะเพิ่มหัวใจใหม่ 1 ดวง

      return () => clearInterval(heartInterval); // clean up เมื่อไม่ต้องการแสดงหัวใจ
    }
  }, [showHearts]);

  return (
    <div className="question-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link to="/menu" className="back-btn">
        <FaArrowLeft className="arrow-icon" />
      </Link>
      <div className="question-container">
        <h1 className="question-title">Do you love me??</h1>
        <div className="answer-options">
          <button 
            className="answer-btn" 
            onClick={() => handleAnswerSelection('Yup💕')}
          >
            Yup💕
          </button>
          <button 
            className="answer-btn" 
            onClick={() => handleAnswerSelection('Not Sure?')}
            disabled={answer !== ''}
          >
            Not Sure?
          </button>
          <button 
            className="answer-btn" 
            onClick={() => handleAnswerSelection('No way!')}
            disabled={answer !== ''}
          >
            No way!
          </button>
        </div>

        {answer && <p className="answer-feedback">Your answer: {answer}</p>}

        {/* แสดงหัวใจเมื่อเลือกคำตอบ "Yup💕" */}
        {showHearts && (
          <div className="hearts-container">
            {hearts.map((heart) => (
              <div
                key={heart.id}
                className="heart"
                style={{
                  top: heart.top,
                  left: heart.left,
                  fontSize: `${heart.size}px`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
