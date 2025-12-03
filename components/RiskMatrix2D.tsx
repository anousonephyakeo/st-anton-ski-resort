'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { EXPEDITION_DATA } from '@/data/expeditionData';

export const RiskMatrix2D: React.FC = () => {
  // Map risks to 2D grid positions
  const risks = EXPEDITION_DATA.risks.map((risk) => ({
    ...risk,
    x: risk.probability, // 0-100
    y: risk.impact / 20, // Convert €impact to 0-100 scale (max €2000 = 100)
  }));

  const getSeverityColor = (x: number, y: number) => {
    const score = (x + y) / 2;
    if (score >= 75) return { bg: 'bg-red-500', text: 'text-red-100', border: 'border-red-400' };
    if (score >= 50) return { bg: 'bg-orange-500', text: 'text-orange-100', border: 'border-orange-400' };
    if (score >= 25) return { bg: 'bg-yellow-500', text: 'text-yellow-900', border: 'border-yellow-400' };
    return { bg: 'bg-green-500', text: 'text-green-100', border: 'border-green-400' };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red-500/20 p-3 rounded-lg">
          <AlertTriangle className="text-red-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Risk Matrix - Probability vs Impact</h3>
          <p className="text-sm text-slate-400">2D visualization of potential risks</p>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        {/* Matrix Grid */}
        <div className="relative w-full aspect-square max-w-3xl mx-auto">
          {/* Background quadrants */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5">
            <div className="bg-green-500/10 rounded-tl-lg"></div>
            <div className="bg-yellow-500/10 rounded-tr-lg"></div>
            <div className="bg-yellow-500/10 rounded-bl-lg"></div>
            <div className="bg-red-500/10 rounded-br-lg"></div>
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0">
            {[0, 25, 50, 75, 100].map((percent) => (
              <React.Fragment key={`grid-${percent}`}>
                {/* Horizontal lines */}
                <div
                  className="absolute w-full border-t border-slate-700"
                  style={{ top: `${100 - percent}%` }}
                >
                  <span className="absolute -left-8 -top-2 text-xs text-slate-500">{percent}</span>
                </div>
                {/* Vertical lines */}
                <div
                  className="absolute h-full border-l border-slate-700"
                  style={{ left: `${percent}%` }}
                >
                  <span className="absolute -bottom-6 -left-3 text-xs text-slate-500">{percent}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Risk points */}
          {risks.map((risk, idx) => {
            const colors = getSeverityColor(risk.x, risk.y);
            return (
              <div
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{
                  left: `${risk.x}%`,
                  bottom: `${risk.y}%`,
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center font-bold text-sm shadow-lg hover:scale-125 transition-transform`}
                >
                  <span className={colors.text}>{idx + 1}</span>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="bg-slate-800 text-white text-xs rounded-lg p-3 whitespace-nowrap border border-slate-600 shadow-xl max-w-xs">
                    <div className="font-bold text-sm mb-1">{risk.name}</div>
                    <div className="text-slate-400 mb-2 whitespace-normal">{risk.description}</div>
                    <div className="flex gap-3 text-xs">
                      <div>
                        <span className="text-slate-500">Probability:</span>
                        <span className="ml-1 text-blue-400 font-bold">{risk.probability}%</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Impact:</span>
                        <span className="ml-1 text-orange-400 font-bold">€{risk.impact}</span>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-700">
                      <div className="text-slate-500 mb-1">Owner:</div>
                      <div className="text-white">{risk.responsible}</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-slate-800 border-b border-r border-slate-600 absolute left-1/2 -translate-x-1/2 rotate-45 -bottom-1"></div>
                </div>
              </div>
            );
          })}

          {/* Axis labels */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-center">
            <div className="text-sm font-semibold text-slate-300">Probability (%)</div>
          </div>
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
            <div className="text-sm font-semibold text-slate-300 whitespace-nowrap">Impact (€)</div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-5 gap-3">
          {risks.map((risk, idx) => {
            const colors = getSeverityColor(risk.x, risk.y);
            return (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center text-xs font-bold ${colors.text}`}>
                  {idx + 1}
                </div>
                <span className="text-xs text-slate-400">{risk.name}</span>
              </div>
            );
          })}
        </div>

        {/* Risk zones explanation */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-slate-400">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-slate-400">Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-slate-400">High Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-slate-400">Critical Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};
