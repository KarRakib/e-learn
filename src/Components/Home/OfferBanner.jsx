import React, { useEffect, useState } from 'react';

const OfferBanner = () => {
  // Set the end date and time for the offer
  const endDate = new Date("2023-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      if (updatedTimeLeft.total <= 0) {
        clearInterval(countdownInterval);
      }
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const total = endDate - now;

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="bg-blue-500 p-4 text-white my-7">
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-2">Limited Time Offer!</h2>
        <p className="text-lg mb-4">Don't miss out on our special deal.</p>
      </div>
      <div className="text-center">
        <div className="text-2xl mb-4">
          <span className="font-bold text-yellow-400">{timeLeft.days} days</span> &nbsp;
          <span className="font-bold text-yellow-400">{timeLeft.hours} hours</span> &nbsp;
          <span className="font-bold text-yellow-400">{timeLeft.minutes} minutes</span> &nbsp;
          <span className="font-bold text-yellow-400">{timeLeft.seconds} seconds</span>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full">Shop Now</button>
      </div>
    </div>
  </div>
  );
};

export default OfferBanner;
