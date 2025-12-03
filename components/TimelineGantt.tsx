'use client';

import React, { useState } from 'react';
import { Calendar, Coffee, Utensils, Mountain, Moon, Car, Home } from 'lucide-react';

const schedule = [
  {
    day: 1,
    date: 'Sat, Feb 7',
    title: 'Deployment Day',
    activities: [
      { time: '05:00-06:00', task: 'Team Assembly & Loading', type: 'logistics', icon: Car },
      { time: '06:00-09:00', task: 'Budapest → Vienna', type: 'travel', icon: Car },
      { time: '09:00-09:20', task: 'Coffee Break', type: 'break', icon: Coffee },
      { time: '09:20-14:00', task: 'Vienna → Innsbruck', type: 'travel', icon: Car },
      { time: '14:00-15:30', task: 'Arrive St. Anton', type: 'logistics', icon: Home },
      { time: '19:00-21:00', task: 'Welcome Dinner', type: 'food', icon: Utensils },
    ],
  },
  {
    day: 2,
    date: 'Sun, Feb 8',
    title: 'First Ski Day',
    activities: [
      { time: '07:30-08:30', task: 'Breakfast', type: 'food', icon: Coffee },
      { time: '09:00-12:30', task: 'Morning Skiing', type: 'skiing', icon: Mountain },
      { time: '12:30-14:00', task: 'Lunch on Mountain', type: 'food', icon: Utensils },
      { time: '14:00-16:30', task: 'Afternoon Skiing', type: 'skiing', icon: Mountain },
      { time: '17:00-19:00', task: 'Après-Ski', type: 'party', icon: Utensils },
      { time: '20:00-22:00', task: 'Dinner & Rest', type: 'food', icon: Moon },
    ],
  },
  {
    day: 3,
    date: 'Mon, Feb 9',
    title: 'Full Ski Day',
    activities: [
      { time: '08:00-09:00', task: 'Breakfast', type: 'food', icon: Coffee },
      { time: '09:00-12:30', task: 'Valluga Peak Attempt', type: 'skiing', icon: Mountain },
      { time: '12:30-13:30', task: 'Mountain Lunch', type: 'food', icon: Utensils },
      { time: '13:30-17:00', task: 'Afternoon Runs', type: 'skiing', icon: Mountain },
      { time: '17:30-19:00', task: 'Après-Ski', type: 'party', icon: Utensils },
      { time: '20:00-22:00', task: 'Dinner', type: 'food', icon: Moon },
    ],
  },
  {
    day: 4,
    date: 'Tue, Feb 10',
    title: 'Ski Day',
    activities: [
      { time: '08:00-09:00', task: 'Breakfast', type: 'food', icon: Coffee },
      { time: '09:00-12:30', task: 'Morning Skiing', type: 'skiing', icon: Mountain },
      { time: '12:30-13:30', task: 'Lunch Break', type: 'food', icon: Utensils },
      { time: '13:30-16:30', task: 'Afternoon Skiing', type: 'skiing', icon: Mountain },
      { time: '17:00-19:00', task: 'Après-Ski', type: 'party', icon: Utensils },
      { time: '20:00-22:00', task: 'Dinner & Rest', type: 'food', icon: Moon },
    ],
  },
  {
    day: 5,
    date: 'Wed, Feb 11',
    title: 'Powder Day',
    activities: [
      { time: '07:30-08:30', task: 'Early Breakfast', type: 'food', icon: Coffee },
      { time: '08:30-12:30', task: 'Fresh Powder Runs', type: 'skiing', icon: Mountain },
      { time: '12:30-13:30', task: 'Quick Lunch', type: 'food', icon: Utensils },
      { time: '13:30-17:00', task: 'More Powder!', type: 'skiing', icon: Mountain },
      { time: '17:30-19:30', task: 'Après-Ski Party', type: 'party', icon: Utensils },
      { time: '20:00-22:00', task: 'Team Dinner', type: 'food', icon: Moon },
    ],
  },
  {
    day: 6,
    date: 'Thu, Feb 12',
    title: 'Last Ski Day',
    activities: [
      { time: '08:00-09:00', task: 'Breakfast', type: 'food', icon: Coffee },
      { time: '09:00-12:30', task: 'Morning Skiing', type: 'skiing', icon: Mountain },
      { time: '12:30-13:30', task: 'Farewell Lunch', type: 'food', icon: Utensils },
      { time: '13:30-16:00', task: 'Final Runs', type: 'skiing', icon: Mountain },
      { time: '16:00-18:00', task: 'Pack & Prepare', type: 'logistics', icon: Home },
      { time: '19:00-21:00', task: 'Farewell Dinner', type: 'food', icon: Moon },
    ],
  },
  {
    day: 7,
    date: 'Fri, Feb 13',
    title: 'Return Journey',
    activities: [
      { time: '07:00-08:00', task: 'Checkout & Loading', type: 'logistics', icon: Car },
      { time: '08:00-14:00', task: 'St. Anton → Vienna', type: 'travel', icon: Car },
      { time: '14:00-14:30', task: 'Lunch Stop', type: 'food', icon: Utensils },
      { time: '14:30-17:00', task: 'Vienna → Budapest', type: 'travel', icon: Car },
      { time: '17:00-18:00', task: 'Arrival & Unload', type: 'logistics', icon: Home },
    ],
  },
];

const typeColors = {
  logistics: 'bg-purple-500/20 border-purple-500/50 text-purple-300',
  travel: 'bg-blue-500/20 border-blue-500/50 text-blue-300',
  break: 'bg-green-500/20 border-green-500/50 text-green-300',
  food: 'bg-orange-500/20 border-orange-500/50 text-orange-300',
  skiing: 'bg-red-500/20 border-red-500/50 text-red-300',
  party: 'bg-pink-500/20 border-pink-500/50 text-pink-300',
};

export const TimelineGantt: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red-500/20 p-3 rounded-lg">
          <Calendar className="text-red-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">7-Day Interactive Timeline</h3>
          <p className="text-sm text-slate-400">Click a day to see detailed schedule</p>
        </div>
      </div>

      {/* Day Selector */}
      <div className="grid grid-cols-7 gap-2">
        {schedule.map((day) => (
          <button
            key={day.day}
            onClick={() => setSelectedDay(day.day)}
            className={`p-3 rounded-lg border-2 transition-all ${
              selectedDay === day.day
                ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-500/30'
                : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-red-500/50'
            }`}
          >
            <div className="text-xs font-medium">Day {day.day}</div>
            <div className="text-xs mt-1 opacity-80">{day.date.split(',')[1]}</div>
          </button>
        ))}
      </div>

      {/* Selected Day Details */}
      {schedule
        .filter((day) => day.day === selectedDay)
        .map((day) => (
          <div key={day.day} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="mb-6">
              <div className="text-sm text-slate-500 mb-1">{day.date}</div>
              <h4 className="text-2xl font-bold text-white">{day.title}</h4>
            </div>

            <div className="space-y-3">
              {day.activities.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg border ${
                      typeColors[activity.type as keyof typeof typeColors]
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white">{activity.task}</div>
                      <div className="text-xs opacity-75 mt-1">{activity.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      {/* Legend */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-purple-500/50"></div>
          <span className="text-slate-400">Logistics</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-blue-500/50"></div>
          <span className="text-slate-400">Travel</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-orange-500/50"></div>
          <span className="text-slate-400">Food</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-red-500/50"></div>
          <span className="text-slate-400">Skiing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-pink-500/50"></div>
          <span className="text-slate-400">Après-Ski</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-green-500/50"></div>
          <span className="text-slate-400">Break</span>
        </div>
      </div>
    </div>
  );
};
