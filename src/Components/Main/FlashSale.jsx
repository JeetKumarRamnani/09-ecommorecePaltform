import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function FlashSale() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Calculate the remaining time until the specified date and time
    const targetDate = new Date(2023, 9, 4); // October is 9 (0-indexed month)
    const now = new Date();

    const timeRemaining = Math.max(targetDate - now, 0); // Ensure time doesn't go negative

    // Calculate hours, minutes, and seconds
    const remainingHours = Math.floor(timeRemaining / (60 * 60 * 1000));
    const remainingMinutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    const remainingSeconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);

    // Update the timer every second
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const remainingTime = Math.max(targetDate - currentTime, 0);

      const hours = Math.floor(remainingTime / (60 * 60 * 1000));
      const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (remainingTime === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <section className='mt-3'>
      <div className='text-gray-600 text-lg'>Flash Sale</div>
      <div className="Timer text-sm flex justify-between items-center p-4 bg-white shadow-xl">
        <div className='Timer-Title-And-Time flex gap-10'>
          <div className='Timer-Title text-[#FF6801]'>On Sale Now</div>
          <div className='Timer-End'>
            <span>Ending In</span>
            <span className='bg-[#FF6801] py-1 px-2 text-white mx-2'>{hours}</span> :
            <span className='bg-[#FF6801] py-1 px-2 text-white mx-2'>{minutes}</span> :
            <span className='bg-[#FF6801] py-1 px-2 text-white mx-2'>{seconds}</span> 
          </div>
        </div>
        <div>
          <button className='text-[#FF6801] px-4 py-2 border border-[#FF6801]'>Shop More</button>
        </div>
      </div>
      <ProductCard/>
    </section>
  )
}

export default FlashSale;
