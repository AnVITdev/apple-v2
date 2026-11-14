import React, { useState } from 'react';
import AppleLogo from './AppleLogo';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Cửa Hàng', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#' },
    { name: 'Watch', href: '#', active: true },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Nhà', href: '#' },
    { name: 'Giải Trí', href: '#' },
    { name: 'Phụ Kiện', href: '#' },
    { name: 'Hỗ Trợ', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[rgba(245,245,247,0.8)] backdrop-blur-md border-b border-black/5 text-[#1d1d1f]">
      <div className="max-w-[1024px] mx-auto px-4 h-11 flex items-center justify-between text-xs tracking-tight">
        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
          <AppleLogo className="w-3.5 h-3.5 fill-black" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 font-normal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-opacity ${link.active ? 'opacity-100 font-medium' : 'opacity-80 hover:opacity-100'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          <button className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Tìm kiếm">
            <Search className="w-3.5 h-3.5 text-[#1d1d1f]" />
          </button>
          <button className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Giỏ hàng">
            <ShoppingBag className="w-3.5 h-3.5 text-[#1d1d1f]" />
          </button>
          <button 
            className="md:hidden opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-b border-gray-200 animate-fadeIn">
          <div className="flex flex-col space-y-3 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-1 text-gray-800 hover:text-black border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
