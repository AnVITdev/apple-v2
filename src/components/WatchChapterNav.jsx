import React from 'react';
import { Watch, Compass, Sparkles, Activity, Layers, Disc } from 'lucide-react';

export default function WatchChapterNav() {
  const chapters = [
    { name: 'Apple Watch Series 10', icon: Watch, tag: 'Mới', href: '#series-10' },
    { name: 'Apple Watch Ultra 2', icon: Compass, tag: 'Mới', href: '#ultra-2' },
    { name: 'Apple Watch SE', icon: Watch, tag: '', href: '#se' },
    { name: 'Apple Watch Nike', icon: Activity, tag: '', href: '#nike' },
    { name: 'Apple Watch Hermès', icon: Sparkles, tag: '', href: '#hermes' },
    { name: 'So Sánh Các Mẫu', icon: Layers, tag: '', href: '#compare' },
    { name: 'Dây Đeo', icon: Disc, tag: '', href: '#bands' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 py-3 overflow-x-auto no-scrollbar">
      <div className="max-w-[1024px] mx-auto px-4 flex justify-between items-center min-w-[700px]">
        {chapters.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center group text-center px-2 py-1 transition-transform hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 flex items-center justify-center text-gray-700 group-hover:text-black mb-1">
                <Icon className="w-7 h-7 stroke-[1.25]" />
              </div>
              <span className="text-[11px] font-normal text-[#1d1d1f] group-hover:text-appleBlue transition-colors max-w-[90px] leading-tight">
                {item.name}
              </span>
              {item.tag && (
                <span className="text-[9px] text-[#f56300] font-medium mt-0.5">
                  {item.tag}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
