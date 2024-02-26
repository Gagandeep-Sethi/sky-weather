import React, { useState, useEffect } from 'react';

const ISTDateTime = () => {
  const [istDateTime, setISTDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const formattedDateTime = now.toLocaleString('en-IN', options);
      setISTDateTime(formattedDateTime);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <p className='text-xl text-white font-semibold text-pretty'>{istDateTime}</p>
    </div>
  );
};

export default ISTDateTime;