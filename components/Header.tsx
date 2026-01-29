import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet, Search } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Filter items that should appear in the menu
  const menuItems = NAV_ITEMS.filter(item => item.inMenu !== false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Accessibility: Skip to Content */}
      <a 
        href="#main-content" 
        className="fixed top-[-100px] left-4 bg-blue-600 text-white px-4 py-3 rounded-lg z-[100] focus:top-4 transition-all duration-300 font-bold shadow-lg ring-2 ring-white"
      >
        본문으로 건너뛰기
      </a>

      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled || isMenuOpen 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.location.hash = ''}>
            <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:scale-105 transition-transform duration-300">
              <Wallet size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
              머니와이즈
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main Navigation">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors" aria-label="검색">
              <Search size={20} />
            </button>
            <button
              className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`md:hidden absolute w-full bg-white border-t border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className="text-base font-medium text-slate-700 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};