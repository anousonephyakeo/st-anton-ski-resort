'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Camera, X } from 'lucide-react';
import { IMAGES } from '@/data/images';

const galleryImages = [
  {
    src: IMAGES.hero.main,
    title: 'St. Anton Panorama',
    description: 'Iconic red sign with stunning mountain views',
  },
  {
    src: IMAGES.stAnton.village,
    title: 'St. Anton Village',
    description: 'Alpine village at 1,304m altitude',
  },
  {
    src: IMAGES.stAnton.skiing,
    title: 'World-Class Skiing',
    description: '305km of pristine pistes',
  },
  {
    src: IMAGES.stAnton.gondola,
    title: 'Modern Lift System',
    description: '88 state-of-the-art lift facilities',
  },
  {
    src: IMAGES.activities.apresSki,
    title: 'Legendary Après-Ski',
    description: 'World-famous party atmosphere',
  },
  {
    src: IMAGES.stAnton.sunset,
    title: 'Alpine Sunset',
    description: 'Breathtaking mountain vistas',
  },
  {
    src: IMAGES.trailMap,
    title: 'Ski Arlberg Trail Map',
    description: 'Largest ski area in Austria',
  },
  {
    src: IMAGES.stAnton.mountains,
    title: 'Valluga Summit',
    description: '2,811m peak with panoramic views',
  },
];

export const PhotoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-500/20 p-3 rounded-lg">
          <Camera className="text-purple-400" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Photo Gallery</h3>
          <p className="text-sm text-slate-400">Experience St. Anton am Arlberg</p>
        </div>
      </div>

      {/* Main carousel */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
        <div className="relative aspect-video bg-slate-950">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            className="object-cover"
            quality={90}
            priority={currentIndex === 0}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-slate-700"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center transition-all hover:scale-110 border border-slate-700"
            aria-label="Next image"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="max-w-2xl">
              <h4 className="text-2xl font-bold text-white mb-2">{currentImage.title}</h4>
              <p className="text-slate-300">{currentImage.description}</p>
            </div>
          </div>

          {/* Fullscreen button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 rounded-lg flex items-center justify-center transition-all border border-slate-700"
            aria-label="View fullscreen"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700">
            <span className="text-white font-semibold text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="p-4 bg-slate-950/50">
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
            {galleryImages.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-red-500 ring-2 ring-red-500/50'
                    : 'border-slate-700 hover:border-slate-500'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                  quality={60}
                  sizes="150px"
                />
                {idx === currentIndex && (
                  <div className="absolute inset-0 bg-red-500/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            aria-label="Close fullscreen"
          >
            <X className="text-white" size={24} />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Navigation in fullscreen */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="text-white" size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="text-white" size={32} />
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-purple-400">305km</div>
          <div className="text-sm text-slate-400 mt-1">Ski Area</div>
        </div>
        <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-blue-400">88</div>
          <div className="text-sm text-slate-400 mt-1">Lifts</div>
        </div>
        <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-red-400">2,811m</div>
          <div className="text-sm text-slate-400 mt-1">Summit</div>
        </div>
        <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700">
          <div className="text-3xl font-bold text-green-400">7 Days</div>
          <div className="text-sm text-slate-400 mt-1">Adventure</div>
        </div>
      </div>
    </div>
  );
};
