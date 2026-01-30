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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Accessibility: Skip to Content */}
      <a 
        href="#main-content" 
        className="fixed top-[-100px] left-4 bg-sky-600 text-white px-4 py-3 rounded-lg z-[100] focus:top-4 transition-all duration-300 font-bold shadow-lg ring-2 ring-white"
      >
        본문으로 건너뛰기
      </a>

      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-500 border-b ${
          scrolled || isMenuOpen 
            ? 'bg-white/90 backdrop-blur-xl border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => window.location.hash = ''}>
            <div className="bg-sky-600 text-white p-2 rounded-xl shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <Wallet size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
              머니와이즈
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main Navigation">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className="px-4 py-2.5 rounded-lg text-sm font-bold text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-colors" aria-label="검색">
              <Search size={20} strokeWidth={2.5} />
            </button>
            <button
              className="md:hidden p-2.5 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`md:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-4 gap-2 pb-6">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className="text-base font-bold text-slate-700 py-3.5 px-5 rounded-xl hover:bg-sky-50 hover:text-sky-600 transition-all flex items-center justify-between active:scale-[0.98]"
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