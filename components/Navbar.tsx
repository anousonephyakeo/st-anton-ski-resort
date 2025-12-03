'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '@/data/images';

const navLinks = [
  { name: 'Mission', href: '#mission' },
  { name: 'Team', href: '#team' },
  { name: 'Comparison', href: '#comparison' },
  { name: 'Logistics', href: '#logistics' },
  { name: 'Budget', href: '#budget' },
  { name: 'Risks', href: '#risks' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-slate-800 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold text-xl text-white tracking-tighter">
          <div className="relative w-12 h-12">
            <Image
              src={IMAGES.logo}
              alt="St. Anton Österreich Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span>
            ST. ANTON <span className="text-red-500">ÖSTERREICH</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-red-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-b border-slate-800 p-4 flex flex-col gap-3 mt-2 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-center py-3 text-slate-300 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-all border border-transparent hover:border-red-500/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
