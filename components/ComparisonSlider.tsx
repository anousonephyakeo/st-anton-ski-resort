'use client';

import React, { useState } from 'react';
import { TrendingDown, DollarSign } from 'lucide-react';

export const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const selfManaged = 1633;
  const travelAgency = 1940;
  const savings = travelAgency - selfManaged;
  const savingsPercent = Math.round((savings / travelAgency) * 100);

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-500/20 p-3 rounded-lg">
          <TrendingDown className="text-green-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Cost Comparison</h3>
          <p className="text-sm text-slate-400">Self-Managed vs Travel Agency</p>
        </div>
      </div>

      {/* Interactive Slider */}
      <div
        className="relative h-96 rounded-xl overflow-hidden border-2 border-slate-700 cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* Travel Agency Side (Right) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-red-800/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-400 text-sm font-bold uppercase mb-2">Travel Agency</div>
            <div className="text-5xl font-black text-white mb-2">€{travelAgency}</div>
            <div className="text-slate-400 text-sm">per person</div>
            <div className="mt-6 space-y-2 text-left max-w-xs">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-red-500">−</span> Package deal markup
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-red-500">−</span> Commission fees
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-red-500">−</span> Limited flexibility
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-red-500">−</span> Fixed schedules
              </div>
            </div>
          </div>
        </div>

        {/* Self-Managed Side (Left) */}
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-br from-green-900/40 to-green-800/20 flex items-center justify-center overflow-hidden transition-all"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="text-center">
            <div className="text-green-400 text-sm font-bold uppercase mb-2">Self-Managed</div>
            <div className="text-5xl font-black text-white mb-2">€{selfManaged}</div>
            <div className="text-slate-400 text-sm">per person</div>
            <div className="mt-6 space-y-2 text-left max-w-xs">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-green-500">✓</span> Direct bookings
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-green-500">✓</span> No commission
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-green-500">✓</span> Full control
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-green-500">✓</span> Custom itinerary
              </div>
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-slate-400 rounded"></div>
              <div className="w-1 h-6 bg-slate-400 rounded"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 glass border border-white/20 rounded-lg px-4 py-2 pointer-events-none">
          <div className="text-white text-xs font-semibold">← Drag to compare →</div>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="glass border border-green-500/30 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-green-400 uppercase mb-1">Total Savings</div>
            <div className="text-4xl font-black text-white">€{savings}</div>
            <div className="text-xs text-slate-400 mt-1">per person ({savingsPercent}% less)</div>
          </div>
          <div className="text-center">
            <DollarSign className="text-green-400 mx-auto mb-2" size={48} />
            <div className="text-xs text-slate-400">For 4 people</div>
            <div className="text-2xl font-bold text-green-400">€{savings * 4}</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="glass bg-green-900/20 rounded-lg p-3 text-center">
            <div className="text-xs text-green-400 uppercase mb-1">Same Quality</div>
            <div className="text-white font-bold">Luxury Experience</div>
          </div>
          <div className="glass bg-green-900/20 rounded-lg p-3 text-center">
            <div className="text-xs text-green-400 uppercase mb-1">Better Value</div>
            <div className="text-white font-bold">Smart Planning</div>
          </div>
        </div>
      </div>
    </div>
  );
};
