'use client';

import React, { useState, useEffect } from 'react';
import { EXPEDITION_DATA } from '@/data/expeditionData';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +EXPEDITION_DATA.project.dates.start - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="glass rounded-lg p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold text-red-500">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase text-slate-400 mt-1">{unit}</div>
        </div>
      ))}
    </div>
  );
};
