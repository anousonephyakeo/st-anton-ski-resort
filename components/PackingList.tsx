'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Package, Snowflake, Cloud } from 'lucide-react';

interface PackingItem {
  id: string;
  name: string;
  category: 'essential' | 'clothing' | 'gear' | 'optional';
  weatherDependent?: boolean;
}

const packingItems: PackingItem[] = [
  // Essential
  { id: '1', name: 'Passport & Travel Documents', category: 'essential' },
  { id: '2', name: 'Travel Insurance Papers', category: 'essential' },
  { id: '3', name: 'Credit Cards & Cash (€)', category: 'essential' },
  { id: '4', name: 'Phone Charger & Power Bank', category: 'essential' },
  
  // Clothing
  { id: '5', name: 'Ski Jacket (Waterproof)', category: 'clothing', weatherDependent: true },
  { id: '6', name: 'Ski Pants', category: 'clothing' },
  { id: '7', name: 'Thermal Base Layers (3-4 sets)', category: 'clothing' },
  { id: '8', name: 'Ski Socks (Wool, 4-5 pairs)', category: 'clothing' },
  { id: '9', name: 'Warm Fleece/Mid-layer', category: 'clothing' },
  { id: '10', name: 'Gloves/Mittens', category: 'clothing', weatherDependent: true },
  { id: '11', name: 'Neck Warmer/Balaclava', category: 'clothing', weatherDependent: true },
  { id: '12', name: 'Beanie/Hat', category: 'clothing' },
  { id: '13', name: 'Après-Ski Clothes', category: 'clothing' },
  
  // Gear
  { id: '14', name: 'Ski Helmet', category: 'gear' },
  { id: '15', name: 'Ski Goggles', category: 'gear' },
  { id: '16', name: 'Sunglasses (UV Protection)', category: 'gear' },
  { id: '17', name: 'Sunscreen SPF 50+', category: 'gear' },
  { id: '18', name: 'Lip Balm (SPF)', category: 'gear' },
  { id: '19', name: 'Small Backpack', category: 'gear' },
  { id: '20', name: 'Water Bottle', category: 'gear' },
  
  // Optional
  { id: '21', name: 'GoPro/Action Camera', category: 'optional' },
  { id: '22', name: 'Hand/Toe Warmers', category: 'optional', weatherDependent: true },
  { id: '23', name: 'First Aid Kit', category: 'optional' },
  { id: '24', name: 'Snacks/Energy Bars', category: 'optional' },
];

export const PackingList: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<string>('all');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('stanton-packing-list');
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem('stanton-packing-list', JSON.stringify(Array.from(checkedItems)));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const filteredItems = packingItems.filter(item => 
    filter === 'all' || item.category === filter
  );

  const progress = Math.round((checkedItems.size / packingItems.length) * 100);

  const categoryColors = {
    essential: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
    clothing: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
    gear: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
    optional: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500/20 p-3 rounded-lg">
          <Package className="text-blue-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Interactive Packing List</h3>
          <p className="text-sm text-slate-400">Check off items as you pack</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="glass border border-slate-700 rounded-xl p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white font-semibold">Packing Progress</span>
          <span className="text-2xl font-bold text-blue-400">{progress}%</span>
        </div>
        <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-3 text-sm text-slate-400">
          {checkedItems.size} of {packingItems.length} items packed
        </div>
      </div>

      {/* Weather Alert */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 flex items-start gap-3">
        <Snowflake className="text-blue-400 flex-shrink-0 mt-1" size={20} />
        <div>
          <div className="text-white font-semibold text-sm mb-1">Weather Recommendation</div>
          <div className="text-xs text-slate-300">Heavy snowfall expected (45-65cm). Pack extra warm layers and hand warmers!</div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            filter === 'all' 
              ? 'bg-white/10 text-white border border-white/20' 
              : 'glass text-slate-400 hover:text-white'
          }`}
        >
          All ({packingItems.length})
        </button>
        {Object.entries(categoryColors).map(([category, colors]) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
              filter === category 
                ? `${colors.bg} ${colors.text} border ${colors.border}` 
                : 'glass text-slate-400 hover:text-white'
            }`}
          >
            {category} ({packingItems.filter(i => i.category === category).length})
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="grid md:grid-cols-2 gap-3">
        {filteredItems.map((item) => {
          const isChecked = checkedItems.has(item.id);
          const colors = categoryColors[item.category];
          
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-center gap-3 p-4 rounded-lg border transition-all text-left ${
                isChecked 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : `glass border-slate-700 hover:border-slate-600`
              }`}
            >
              <div className="flex-shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="text-green-400" size={24} />
                ) : (
                  <Circle className="text-slate-500" size={24} />
                )}
              </div>
              <div className="flex-1">
                <div className={`font-medium ${isChecked ? 'text-slate-400 line-through' : 'text-white'}`}>
                  {item.name}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}>
                    {item.category}
                  </span>
                  {item.weatherDependent && (
                    <span className="text-xs text-blue-400 flex items-center gap-1">
                      <Cloud size={12} /> Weather-dependent
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-3">
        {Object.entries(categoryColors).map(([category, colors]) => {
          const categoryItems = packingItems.filter(i => i.category === category);
          const checkedCount = categoryItems.filter(i => checkedItems.has(i.id)).length;
          
          return (
            <div key={category} className={`${colors.bg} border ${colors.border} rounded-lg p-3 text-center`}>
              <div className={`text-2xl font-bold ${colors.text}`}>{checkedCount}/{categoryItems.length}</div>
              <div className="text-xs text-slate-400 capitalize mt-1">{category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
