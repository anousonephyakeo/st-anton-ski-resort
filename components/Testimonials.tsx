'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: string;
  venue: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  type: 'restaurant' | 'bar' | 'ski' | 'accommodation';
}

const reviews: Review[] = [
  {
    id: '1',
    venue: 'MooserWirt',
    author: 'Sarah M.',
    rating: 5,
    comment: 'The ultimate après-ski experience! Incredible atmosphere, live music, and the best party vibe in St. Anton. Get there early!',
    date: 'Feb 2024',
    type: 'bar',
  },
  {
    id: '2',
    venue: 'Krazy Kanguruh',
    author: 'James L.',
    rating: 5,
    comment: 'Legendary après-ski bar right on the slopes. Live DJ, dancing on tables, and unforgettable memories. A must-visit!',
    date: 'Jan 2024',
    type: 'bar',
  },
  {
    id: '3',
    venue: 'Ski Arlberg Area',
    author: 'Emma R.',
    rating: 5,
    comment: 'Best ski resort in the Alps! 305km of perfectly groomed pistes, excellent lift system, and powder paradise. Worth every euro!',
    date: 'Feb 2024',
    type: 'ski',
  },
  {
    id: '4',
    venue: 'Hospiz Alm',
    author: 'Michael K.',
    rating: 5,
    comment: 'Europe\'s highest gourmet restaurant! Amazing food, stunning views, and the wine cellar is absolutely incredible. Book ahead!',
    date: 'Mar 2024',
    type: 'restaurant',
  },
  {
    id: '5',
    venue: 'Hasensprung',
    author: 'Lisa P.',
    rating: 4,
    comment: 'Traditional Austrian cuisine at its finest. The Wiener Schnitzel is massive and delicious. Cozy atmosphere perfect after skiing.',
    date: 'Jan 2024',
    type: 'restaurant',
  },
  {
    id: '6',
    venue: 'St. Anton Village',
    author: 'David H.',
    rating: 5,
    comment: 'Charming Alpine village with perfect ski-in/ski-out access. Great mix of traditional and modern. The nightlife is world-class!',
    date: 'Feb 2024',
    type: 'accommodation',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  const typeColors = {
    restaurant: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
    bar: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
    ski: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
    accommodation: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-500/20 p-3 rounded-lg">
          <Star className="text-yellow-400 fill-yellow-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Guest Reviews</h3>
          <p className="text-sm text-slate-400">Real experiences from St. Anton visitors</p>
        </div>
      </div>

      {/* Main Review Card */}
      <div className="relative glass border border-slate-700 rounded-2xl p-8 min-h-[300px]">
        <Quote className="absolute top-4 left-4 text-slate-700 opacity-30" size={48} />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">{currentReview.venue}</h4>
              {renderStars(currentReview.rating)}
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeColors[currentReview.type].bg} ${typeColors[currentReview.type].text} border ${typeColors[currentReview.type].border}`}>
              {currentReview.type}
            </span>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
            "{currentReview.comment}"
          </p>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">{currentReview.author}</div>
              <div className="text-xs text-slate-500">{currentReview.date}</div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="text-white" size={20} />
              </button>
              <span className="text-sm text-slate-400">
                {currentIndex + 1} / {reviews.length}
              </span>
              <button
                onClick={goToNext}
                className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="text-white" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {reviews.map((review, index) => {
          const colors = typeColors[review.type];
          
          return (
            <button
              key={review.id}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`p-3 rounded-lg border transition-all ${
                index === currentIndex
                  ? `${colors.bg} ${colors.border} scale-105`
                  : 'glass border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-xs font-bold text-white mb-1 truncate">{review.venue}</div>
              <div className="flex gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}
                  />
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="glass border border-yellow-500/30 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-yellow-400">4.8</div>
          <div className="text-xs text-slate-400 mt-1">Average Rating</div>
        </div>
        <div className="glass border border-blue-500/30 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-400">{reviews.length}</div>
          <div className="text-xs text-slate-400 mt-1">Reviews</div>
        </div>
        <div className="glass border border-green-500/30 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-green-400">100%</div>
          <div className="text-xs text-slate-400 mt-1">Recommended</div>
        </div>
        <div className="glass border border-purple-500/30 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-purple-400">2024</div>
          <div className="text-xs text-slate-400 mt-1">Season</div>
        </div>
      </div>
    </div>
  );
};
