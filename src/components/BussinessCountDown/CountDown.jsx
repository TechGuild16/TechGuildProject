import React, { useState, useEffect } from 'react';
import './CountDown.css';

const CountDown = () => {
  const initialTime = {
    days: 75,
    hours: 59,
    minutes: 59,
    seconds: 0
  };

  // useEffect(() => {
  //   if (!localStorage.getItem('initialTime')) {
  //     localStorage.setItem('initialTime', JSON.stringify(initialTime));
  //   }
  // }, []);

  // const calculateTimeLeft = () => {
  //   const savedInitialTime = localStorage.getItem('initialTime');
    
  //   if (!savedInitialTime) {
  //     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }

  //   const parsedInitialTime = JSON.parse(savedInitialTime);

  //   const totalInitialSeconds =
  //     parsedInitialTime.days * 24 * 60 * 60 +
  //     parsedInitialTime.hours * 60 * 60 +
  //     parsedInitialTime.minutes * 60 +
  //     parsedInitialTime.seconds;


  //   const now = Date.now();
  //   const startTime = localStorage.getItem('startTime');
  //   const elapsedTime = startTime ? (now - startTime) / 1000 : 0; 

  //   const remainingTime = totalInitialSeconds - elapsedTime;

  //   if (remainingTime <= 0) {
  //     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }

  //   const days = Math.floor(remainingTime / (24 * 60 * 60));
  //   const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  //   const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  //   const seconds = Math.floor(remainingTime % 60);

  //   return { days, hours, minutes, seconds };
  // };

  
  // useEffect(() => {
  //   if (!localStorage.getItem('startTime')) {
  //     localStorage.setItem('startTime', Date.now());
  //   }
  // }, []);

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="countDown d-flex align-items-center justify-content-between">
      <div className="countDownDetails">
        <h3 className="uppercase">Our Business Will Start</h3>
        <p>
          Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
        </p>
      </div>

      <div className="countDownTimer d-flex align-self-start">
        <div className="timeBox">
          <h2>75</h2>
          <span className="label">DAYS</span>
        </div>
        <div className="timeBox">
          <h2>59</h2>
          <span className="label">HOURS</span>
        </div>
        <div className="timeBox">
          <h2>59</h2>
          <span className="label">MINUTES</span>
        </div>
        <div className="timeBox">
          <h2>0</h2>
          <span className="label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
