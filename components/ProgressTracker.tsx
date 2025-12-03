'use client';

import React, { useState, useEffect } from 'react';
import { Target, X, Sparkles } from 'lucide-react';

interface ProgressItem {
  id: string;
  label: string;
  completed: boolean;
}

export const ProgressTracker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<ProgressItem[]>([
    { id: 'mission', label: 'Mission & Identity', completed: false },
    { id: 'team', label: 'Team Structure', completed: false },
    { id: 'comparison', label: 'Resort Comparison', completed: false },
    { id: 'logistics', label: 'Logistics Plan', completed: false },
    { id: 'weather', label: 'Weather Forecast', completed: false },
    { id: 'budget', label: 'Budget Review', completed: false },
    { id: 'risks', label: 'Risk Assessment', completed: false },
    { id: 'packing', label: 'Packing List', completed: false },
  ]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('stanton-progress');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Track section visits
  useEffect(() => {
    const handleScroll = () => {
      const updatedItems = items.map(item => {
        const element = document.getElementById(item.id);
        if (element && !item.completed) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            return { ...item, completed: true };
          }
        }
        return item;
      });

      // Check if anything changed
      if (JSON.stringify(updatedItems) !== JSON.stringify(items)) {
        setItems(updatedItems);
        localStorage.setItem('stanton-progress', JSON.stringify(updatedItems));
        
        // Check for 100% completion
        if (updatedItems.every(item => item.completed) && !showConfetti) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, showConfetti]);

  const completedCount = items.filter(item => item.completed).length;
  const progress = Math.round((completedCount / items.length) * 100);

  // Confetti animation
  const confettiColors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

  return (
    <>
      {/* Floating Progress Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-full shadow-2xl shadow-blue-500/50 hover:scale-110 transition-transform"
      >
        <Target size={28} />
        <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
          {progress}%
        </div>
      </button>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* 100% Completion Banner */}
      {progress === 100 && showConfetti && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 glass border border-green-500/50 rounded-2xl p-8 shadow-2xl animate-slide-up text-center">
          <Sparkles className="text-green-400 mx-auto mb-4" size={64} />
          <h2 className="text-4xl font-black text-white mb-2">🎉 Congratulations! 🎉</h2>
          <p className="text-lg text-green-400">You've explored everything!</p>
          <p className="text-sm text-slate-400 mt-2">Ready for St. Anton am Arlberg!</p>
        </div>
      )}

      {/* Progress Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 glass border border-slate-700 rounded-2xl w-80 shadow-2xl">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold">Planning Progress</h3>
              <p className="text-xs text-slate-400">Track your exploration</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="p-4">
            {/* Circular Progress */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-slate-700"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                  className="text-blue-500 transition-all duration-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">{progress}%</div>
                  <div className="text-xs text-slate-400">Complete</div>
                </div>
              </div>
            </div>

            {/* Progress Items */}
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
                    item.completed 
                      ? 'bg-green-500/10 border border-green-500/30' 
                      : 'glass border border-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    item.completed 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-slate-600'
                  }`}>
                    {item.completed && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${item.completed ? 'text-white font-semibold' : 'text-slate-400'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-4 pt-4 border-t border-slate-700 text-center">
              <div className="text-sm text-slate-400">
                {completedCount} of {items.length} sections explored
              </div>
              {progress === 100 && (
                <div className="mt-2 text-xs text-green-400 font-bold">
                  ✨ All set for the expedition! ✨
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
