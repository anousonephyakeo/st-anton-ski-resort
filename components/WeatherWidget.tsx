'use client';

import React from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, Wind, Snowflake } from 'lucide-react';

// Realistic February weather data for St. Anton
const weatherData = [
  { day: 'Sat Feb 7', high: -2, low: -8, condition: 'snow', precipitation: '80%', snowfall: '15cm' },
  { day: 'Sun Feb 8', high: -1, low: -7, condition: 'cloudy', precipitation: '40%', snowfall: '5cm' },
  { day: 'Mon Feb 9', high: 1, low: -6, condition: 'snow', precipitation: '70%', snowfall: '12cm' },
  { day: 'Tue Feb 10', high: 2, low: -5, condition: 'partly-cloudy', precipitation: '30%', snowfall: '3cm' },
  { day: 'Wed Feb 11', high: 0, low: -7, condition: 'snow', precipitation: '85%', snowfall: '18cm' },
  { day: 'Thu Feb 12', high: -1, low: -8, condition: 'cloudy', precipitation: '50%', snowfall: '8cm' },
  { day: 'Fri Feb 13', high: 1, low: -6, condition: 'partly-cloudy', precipitation: '35%', snowfall: '4cm' },
];

const WeatherIcon = ({ condition }: { condition: string }) => {
  const iconProps = { size: 32, className: "text-blue-400" };
  
  switch (condition) {
    case 'snow':
      return <CloudSnow {...iconProps} />;
    case 'cloudy':
      return <Cloud {...iconProps} />;
    case 'partly-cloudy':
      return <Sun {...iconProps} className="text-yellow-400" />;
    case 'rain':
      return <CloudRain {...iconProps} />;
    default:
      return <Sun {...iconProps} className="text-yellow-400" />;
  }
};

export const WeatherWidget: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500/20 p-3 rounded-lg">
          <Snowflake className="text-blue-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">7-Day Weather Forecast</h3>
          <p className="text-sm text-slate-400">St. Anton am Arlberg • February 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
        {weatherData.map((day, idx) => (
          <div
            key={idx}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-all hover:-translate-y-1"
          >
            <div className="text-center">
              <div className="text-xs text-slate-400 font-medium mb-2">{day.day}</div>
              
              <div className="flex justify-center mb-3">
                <WeatherIcon condition={day.condition} />
              </div>

              <div className="space-y-1 mb-3">
                <div className="text-2xl font-bold text-white">{day.high}°C</div>
                <div className="text-sm text-slate-500">{day.low}°C</div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-center gap-1 text-blue-400">
                  <CloudSnow size={14} />
                  <span>{day.snowfall}</span>
                </div>
                <div className="text-slate-500">
                  {day.precipitation} chance
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Wind className="text-blue-400 flex-shrink-0" size={20} />
          <div className="text-sm">
            <div className="text-white font-semibold mb-1">Peak Winter Conditions</div>
            <div className="text-slate-400">
              Excellent powder conditions expected. Total snowfall: <span className="text-blue-400 font-bold">65cm</span> during your stay.
              Fresh snow daily ensures premium skiing experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
