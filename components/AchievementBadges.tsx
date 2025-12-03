'use client';

import React, { useState, useEffect } from 'react';
import { Award, Lock, Sparkles } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  tier: 'gold' | 'silver' | 'bronze';
  unlockCriteria: string;
}

const badges: Badge[] = [
  { id: 'budget', name: 'Budget Master', description: 'Viewed complete budget breakdown', icon: '💰', tier: 'gold', unlockCriteria: 'budget' },
  { id: 'risk', name: 'Risk Manager', description: 'Reviewed all risk protocols', icon: '🛡️', tier: 'gold', unlockCriteria: 'risks' },
  { id: 'route', name: 'Route Planner', description: 'Explored the full route map', icon: '🗺️', tier: 'silver', unlockCriteria: 'logistics' },
  { id: 'team', name: 'Team Leader', description: 'Met the expedition team', icon: '👥', tier: 'silver', unlockCriteria: 'team' },
  { id: 'weather', name: 'Weather Expert', description: 'Checked weather forecast', icon: '🌨️', tier: 'bronze', unlockCriteria: 'weather' },
  { id: 'packing', name: 'Packing Pro', description: 'Completed packing list', icon: '🎒', tier: 'gold', unlockCriteria: 'packing' },
  { id: 'gallery', name: 'Explorer', description: 'Viewed photo gallery', icon: '📸', tier: 'bronze', unlockCriteria: 'gallery' },
  { id: 'timeline', name: 'Time Master', description: 'Reviewed expedition timeline', icon: '📅', tier: 'silver', unlockCriteria: 'timeline' },
];

export const AchievementBadges: React.FC = () => {
  const [unlockedBadges, setUnlockedBadges] = useState<Set<string>>(new Set());
  const [isOpen, setIsOpen] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState<string | null>(null);

  // Load unlocked badges from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('stanton-badges');
    if (saved) {
      setUnlockedBadges(new Set(JSON.parse(saved)));
    }
  }, []);

  // Track section visits
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'team', 'comparison', 'logistics', 'weather', 'elevation', 'timeline', 'gallery', 'budget', 'risks'];
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            const badge = badges.find(b => b.unlockCriteria === sectionId);
            if (badge && !unlockedBadges.has(badge.id)) {
              unlockBadge(badge.id);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [unlockedBadges]);

  const unlockBadge = (badgeId: string) => {
    const newUnlocked = new Set(unlockedBadges);
    newUnlocked.add(badgeId);
    setUnlockedBadges(newUnlocked);
    localStorage.setItem('stanton-badges', JSON.stringify(Array.from(newUnlocked)));
    
    // Show unlock animation
    setJustUnlocked(badgeId);
    setTimeout(() => setJustUnlocked(null), 3000);
  };

  const progress = Math.round((unlockedBadges.size / badges.length) * 100);

  const tierColors = {
    gold: { bg: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/50', text: 'text-yellow-400', glow: 'shadow-yellow-500/50' },
    silver: { bg: 'from-slate-300/20 to-slate-400/20', border: 'border-slate-400/50', text: 'text-slate-300', glow: 'shadow-slate-400/50' },
    bronze: { bg: 'from-orange-700/20 to-orange-800/20', border: 'border-orange-600/50', text: 'text-orange-400', glow: 'shadow-orange-600/50' },
  };

  return (
    <>
      {/* Floating Badge Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-4 rounded-full shadow-2xl shadow-purple-500/50 hover:scale-110 transition-transform"
      >
        <Award size={28} />
        {unlockedBadges.size > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {unlockedBadges.size}
          </span>
        )}
      </button>

      {/* Just Unlocked Notification */}
      {justUnlocked && (
        <div className="fixed top-6 right-6 z-50 glass border border-green-500/50 rounded-xl p-4 shadow-2xl animate-slide-up">
          <div className="flex items-center gap-3">
            <Sparkles className="text-green-400" size={24} />
            <div>
              <div className="text-white font-bold">Achievement Unlocked!</div>
              <div className="text-sm text-green-400">{badges.find(b => b.id === justUnlocked)?.name}</div>
            </div>
          </div>
        </div>
      )}

      {/* Badge Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="glass border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Achievement Badges</h2>
                <p className="text-sm text-slate-400">Track your expedition planning progress</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            {/* Progress */}
            <div className="mb-6 glass border border-purple-500/30 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Overall Progress</span>
                <span className="text-2xl font-bold text-purple-400">{progress}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-slate-400">
                {unlockedBadges.size} of {badges.length} badges unlocked
              </div>
            </div>

            {/* Badges Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {badges.map((badge) => {
                const isUnlocked = unlockedBadges.has(badge.id);
                const colors = tierColors[badge.tier];
                
                return (
                  <div
                    key={badge.id}
                    className={`relative rounded-xl p-4 border transition-all ${
                      isUnlocked 
                        ? `bg-gradient-to-br ${colors.bg} ${colors.border} shadow-lg ${colors.glow}` 
                        : 'glass border-slate-700 opacity-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-4xl ${isUnlocked ? 'animate-bounce' : 'grayscale'}`}>
                        {isUnlocked ? badge.icon : <Lock className="text-slate-600" size={32} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-bold ${isUnlocked ? 'text-white' : 'text-slate-500'}`}>
                            {badge.name}
                          </h3>
                          <span className={`text-xs px-2 py-0.5 rounded ${colors.bg} ${colors.text} uppercase font-bold`}>
                            {badge.tier}
                          </span>
                        </div>
                        <p className={`text-xs ${isUnlocked ? 'text-slate-300' : 'text-slate-600'}`}>
                          {badge.description}
                        </p>
                      </div>
                    </div>
                    
                    {isUnlocked && (
                      <div className="absolute top-2 right-2">
                        <Sparkles className="text-yellow-400" size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tier Summary */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {(['gold', 'silver', 'bronze'] as const).map((tier) => {
                const tierBadges = badges.filter(b => b.tier === tier);
                const unlocked = tierBadges.filter(b => unlockedBadges.has(b.id)).length;
                const colors = tierColors[tier];
                
                return (
                  <div key={tier} className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg p-3 text-center`}>
                    <div className={`text-2xl font-bold ${colors.text}`}>{unlocked}/{tierBadges.length}</div>
                    <div className="text-xs text-slate-400 capitalize mt-1">{tier}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
