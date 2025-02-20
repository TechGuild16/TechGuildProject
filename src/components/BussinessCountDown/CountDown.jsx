import React, { useState, useEffect } from 'react';
import './CountDown.css';

const CountDown = () => {
  const initialTime = {
    days: 75,
    hours: 23, 
    minutes: 59,
    seconds: 0
  };

  const totalInitialSeconds =
    initialTime.days * 24 * 60 * 60 +
    initialTime.hours * 60 * 60 +
    initialTime.minutes * 60 +
    initialTime.seconds;

  const calculateTimeLeft = () => {
    const startTime = localStorage.getItem('startTime');

    if (!startTime) {
      return initialTime;
    }

    const now = Date.now();
    const elapsedTime = (now - parseInt(startTime)) / 1000; 
    const remainingTime = totalInitialSeconds - elapsedTime;

    if (remainingTime <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
    }

    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!localStorage.getItem('initialTime')) {
      localStorage.setItem('initialTime', JSON.stringify(initialTime));
    }

    if (!localStorage.getItem('startTime')) {
      localStorage.setItem('startTime', Date.now());
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          <h2>{timeLeft.days}</h2>
          <span className="label">DAYS</span>
        </div>
        <div className="timeBox">
          <h2>{timeLeft.hours}</h2>
          <span className="label">HOURS</span>
        </div>
        <div className="timeBox">
          <h2>{timeLeft.minutes}</h2>
          <span className="label">MINUTES</span>
        </div>
        <div className="timeBox">
          <h2>{timeLeft.seconds}</h2>
          <span className="label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;