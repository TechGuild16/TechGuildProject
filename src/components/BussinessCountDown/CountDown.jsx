import React, { useState, useEffect } from "react";
import "./CountDown.css";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fetchCountdown = async () => {
    try {
      const response = await fetch("http://localhost:5000/countdown");
      const data = await response.json();
      setTimeLeft(data);
    } catch (error) {
      console.error("Error fetching countdown:", error);
    }
  };

  useEffect(() => {
    fetchCountdown(); 
    const timer = setInterval(fetchCountdown, 1000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countDown d-flex align-items-center justify-content-between">
      <div className="countDownDetails">
        <h3 className="uppercase">Our Business Will Start</h3>
        <p>
          Take the first step towards digital success with NexGen by your side.
          Our team of experts is eager to craft tailored solutions that drive growth for your business.
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
