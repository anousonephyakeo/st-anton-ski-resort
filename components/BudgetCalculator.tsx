'use client';

import React, { useState, useEffect } from 'react';
import { Card } from './ui/Layout';
import { EXPEDITION_DATA } from '@/data/expeditionData';

export const BudgetCalculator: React.FC = () => {
  const [people, setPeople] = useState(4);
  const [days, setDays] = useState(7);
  const [tier, setTier] = useState<'Premium' | 'Standard'>('Premium');
  
  const [calculated, setCalculated] = useState({
    transport: 0,
    accommodation: 0,
    activities: 0,
    food: 0,
    insurance: 0,
    total: 0,
    perPerson: 0,
  });

  useEffect(() => {
    // Base costs (from data)
    const transport = 1050; // Fixed for van
    const accommodationPerNight = 1700 / 7; // €1700 for 7 nights, 2 rooms
    const accommodation = (accommodationPerNight * days);
    
    const skiPassPerDay = 380 / 6; // €380 for 6 days
    const equipmentCost = tier === 'Premium' ? 150 : 100;
    const activities = (skiPassPerDay * (days - 1) * people) + (equipmentCost * people);
    
    const foodPerPersonPerDay = 60;
    const food = foodPerPersonPerDay * people * (days - 1); // Exclude travel day
    
    const insurancePerPerson = 55;
    const insurance = insurancePerPerson * people;
    
    const total = transport + accommodation + activities + food + insurance;
    const perPerson = total / people;

    setCalculated({
      transport,
      accommodation,
      activities,
      food,
      insurance,
      total,
      perPerson,
    });
  }, [people, days, tier]);

  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800">
      <h3 className="text-2xl font-bold text-white mb-6">Interactive Budget Calculator</h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Number of People
          </label>
          <input
            type="range"
            min="2"
            max="9"
            value={people}
            onChange={(e) => setPeople(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
          <div className="text-center text-2xl font-bold text-red-500 mt-2">{people}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Number of Days
          </label>
          <input
            type="range"
            min="3"
            max="14"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="text-center text-2xl font-bold text-blue-500 mt-2">{days}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Equipment Tier
          </label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as 'Premium' | 'Standard')}
            className="w-full bg-slate-700 text-white rounded-lg p-3 cursor-pointer border border-slate-600 focus:border-red-500 focus:outline-none"
          >
            <option value="Premium">Premium (€150)</option>
            <option value="Standard">Standard (€100)</option>
          </select>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { label: 'Transport', value: calculated.transport, color: 'text-slate-400' },
          { label: 'Accommodation', value: calculated.accommodation, color: 'text-slate-300' },
          { label: 'Activities', value: calculated.activities, color: 'text-blue-400' },
          { label: 'Food & Dining', value: calculated.food, color: 'text-green-400' },
          { label: 'Insurance', value: calculated.insurance, color: 'text-purple-400' },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center py-2 border-b border-slate-700">
            <span className="text-slate-300">{item.label}</span>
            <span className={`font-bold ${item.color}`}>€{item.value.toFixed(0)}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="glass bg-red-900/20 rounded-lg p-4 text-center border border-red-500/30">
          <div className="text-xs text-red-400 uppercase mb-1">Total Budget</div>
          <div className="text-3xl font-black text-white">€{calculated.total.toFixed(0)}</div>
        </div>
        <div className="glass bg-blue-900/20 rounded-lg p-4 text-center border border-blue-500/30">
          <div className="text-xs text-blue-400 uppercase mb-1">Per Person</div>
          <div className="text-3xl font-black text-white">€{calculated.perPerson.toFixed(0)}</div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
        <span className="text-sm text-green-400">
          💰 Estimated Savings vs Agency: <strong>€{((calculated.perPerson * 0.158).toFixed(0))}</strong> per person
        </span>
      </div>
    </Card>
  );
};
