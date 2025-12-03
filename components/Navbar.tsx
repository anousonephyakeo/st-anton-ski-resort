'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IMAGES } from '@/data/images';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Mission', href: '#mission' },
  { name: 'Team', href: '#team' },
  { name: 'Comparison', href: '#comparison' },
  { 
    name: 'Planning', 
    href: '#logistics',
    submenu: [
      { name: 'Logistics & Route', href: '#logistics' },
      { name: 'Weather Forecast', href: '#weather' },
      { name: 'Elevation Profile', href: '#elevation' },
      { name: 'Timeline & Gantt', href: '#timeline' },
    ]
  },
  { 
    name: 'Resources', 
    href: '#gallery',
    submenu: [
      { name: 'Photo Gallery', href: '#gallery' },
      { name: 'Packing List', href: '#packing' },
      { name: 'Emergency Contacts', href: '#emergency' },
    ]
  },
  { name: 'Budget', href: '#budget' },
  { name: 'Risks', href: '#risks' },
  { name: 'Project Management', href: '#project-management' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
          ? 'glass border-b border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 font-bold text-xl text-white tracking-tighter hover:opacity-80 transition-opacity">
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
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
              onMouseLeave={() => link.submenu && setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-slate-300 hover:text-red-500 transition-colors relative whitespace-nowrap"
              >
                {link.name}
                {link.submenu && (
                  <ChevronDown 
                    size={14} 
                    className={`opacity-70 transition-transform duration-200 ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`} 
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>

              {/* Dropdown Menu */}
              {link.submenu && activeDropdown === link.name && (
                <div 
                  className="absolute top-full left-0 pt-2"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="w-64 glass border border-slate-700 rounded-lg shadow-2xl overflow-hidden animate-fade-in backdrop-blur-xl bg-slate-900/95">
                    {link.submenu.map((sublink, index) => (
                      <a
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-5 py-3 text-slate-300 hover:bg-red-500/10 hover:text-red-500 transition-all border-b border-slate-800/50 last:border-b-0 hover:pl-6 duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-red-500/60 group-hover:text-red-500">›</span>
                          <span>{sublink.name}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-b border-slate-800 p-4 flex flex-col gap-2 mt-2 animate-fade-in max-h-[80vh] overflow-y-auto shadow-2xl">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.submenu ? '#' : link.href}
                className="block text-left py-3 px-4 text-slate-300 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-all border border-transparent hover:border-red-500/30 flex items-center justify-between font-medium"
                onClick={(e) => {
                  if (link.submenu) {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === link.name ? null : link.name);
                  } else {
                    setIsMobileMenuOpen(false);
                    setActiveDropdown(null);
                  }
                }}
              >
                {link.name}
                {link.submenu && (
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-red-500' : 'text-slate-500'}`} 
                  />
                )}
              </a>

              {/* Mobile Submenu */}
              {link.submenu && activeDropdown === link.name && (
                <div className="ml-2 mt-2 flex flex-col gap-1 pl-3 border-l-2 border-red-500/30 animate-fade-in">
                  {link.submenu.map((sublink) => (
                    <a
                      key={sublink.name}
                      href={sublink.href}
                      className="block py-2.5 px-4 text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/5 rounded transition-all hover:pl-5 duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-red-500/60">›</span>
                        <span>{sublink.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
