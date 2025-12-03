'use client';

import React from 'react';
import { TrendingUp, MapPin } from 'lucide-react';

// Route elevation data with realistic values
const elevationData = [
  { location: 'Budapest', distance: 0, elevation: 102, color: 'bg-green-500' },
  { location: 'Vienna', distance: 243, elevation: 171, color: 'bg-green-500' },
  { location: 'Salzburg', distance: 540, elevation: 424, color: 'bg-yellow-500' },
  { location: 'Innsbruck', distance: 730, elevation: 574, color: 'bg-orange-500' },
  { location: 'Landeck', distance: 820, elevation: 816, color: 'bg-orange-500' },
  { location: 'St. Anton', distance: 850, elevation: 1304, color: 'bg-red-500' },
];

export const ElevationProfile: React.FC = () => {
  const maxElevation = 1400;
  const maxDistance = 850;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-500/20 p-3 rounded-lg">
          <TrendingUp className="text-green-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Route Elevation Profile</h3>
          <p className="text-sm text-slate-400">Budapest (102m) → St. Anton (1,304m)</p>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        {/* Elevation Chart */}
        <div className="relative h-80 mb-6">
          {/* Grid lines */}
          <div className="absolute inset-0">
            {[0, 25, 50, 75, 100].map((percent) => (
              <div
                key={percent}
                className="absolute w-full border-t border-slate-800"
                style={{ bottom: `${percent}%` }}
              >
                <span className="absolute -left-12 -top-2 text-xs text-slate-600">
                  {Math.round((maxElevation * percent) / 100)}m
                </span>
              </div>
            ))}
          </div>

          {/* Elevation line */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="elevationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="rgb(251, 146, 60)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Fill area under the line */}
            <path
              d={`M 0 ${320 - (elevationData[0].elevation / maxElevation) * 320} ${elevationData
                .map(
                  (point, idx) =>
                    `L ${(point.distance / maxDistance) * 100}% ${
                      320 - (point.elevation / maxElevation) * 320
                    }`
                )
                .join(' ')} L 100% 320 L 0 320 Z`}
              fill="url(#elevationGradient)"
            />
            
            {/* Line */}
            <polyline
              points={elevationData
                .map(
                  (point) =>
                    `${(point.distance / maxDistance) * 100}%,${
                      320 - (point.elevation / maxElevation) * 320
                    }`
                )
                .join(' ')}
              fill="none"
              stroke="rgb(239, 68, 68)"
              strokeWidth="3"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Location markers */}
          {elevationData.map((point, idx) => (
            <div
              key={idx}
              className="absolute transform -translate-x-1/2"
              style={{
                left: `${(point.distance / maxDistance) * 100}%`,
                bottom: `${(point.elevation / maxElevation) * 100}%`,
              }}
            >
              <div className="relative group">
                <div className={`w-4 h-4 rounded-full ${point.color} ring-4 ring-slate-900 cursor-pointer hover:scale-125 transition-transform`}></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-slate-800 text-white text-xs rounded-lg p-2 whitespace-nowrap border border-slate-600 shadow-xl">
                    <div className="font-bold">{point.location}</div>
                    <div className="text-slate-400">{point.elevation}m</div>
                    <div className="text-slate-500">{point.distance}km</div>
                  </div>
                  <div className="w-2 h-2 bg-slate-800 border-b border-r border-slate-600 absolute left-1/2 -translate-x-1/2 rotate-45 -bottom-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location labels */}
        <div className="grid grid-cols-6 gap-2 text-center text-xs">
          {elevationData.map((point, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-center gap-1">
                <MapPin size={12} className="text-slate-500" />
                <span className="font-semibold text-white">{point.location}</span>
              </div>
              <div className="text-slate-500">{point.distance}km</div>
              <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${point.color} bg-opacity-20`}>
                {point.elevation}m
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">+1,202m</div>
            <div className="text-xs text-slate-500 mt-1">Total Climb</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">850km</div>
            <div className="text-xs text-slate-500 mt-1">Total Distance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">8-9hrs</div>
            <div className="text-xs text-slate-500 mt-1">Drive Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};
