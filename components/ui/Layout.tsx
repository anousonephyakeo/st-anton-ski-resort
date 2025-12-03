'use client';

import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => (
  <section
    id={id}
    className={`py-20 px-4 md:px-8 max-w-7xl mx-auto animate-fade-in ${className}`}
  >
    {children}
  </section>
);

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => (
  <div
    className={`glass rounded-xl p-6 border border-slate-700/50 ${
      hover ? 'hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300' : ''
    } ${className}`}
  >
    {children}
  </div>
);

interface BadgeProps {
  children: ReactNode;
  color?: 'blue' | 'red' | 'white' | 'green' | 'purple' | 'orange';
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    red: 'bg-red-500/10 text-red-400 border-red-500/30',
    white: 'bg-white/10 text-slate-200 border-white/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider border ${colors[color]} inline-block`}
    >
      {children}
    </span>
  );
};
