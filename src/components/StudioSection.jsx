import React, { useState } from 'react';
import AppleLogo from './AppleLogo';

export default function StudioSection() {
  const [selectedCase, setSelectedCase] = useState('titanium');
  const [selectedBand, setSelectedBand] = useState('ocean');

  const cases = [
    { id: 'titanium', name: 'Titan Tự Nhiên', color: 'bg-stone-300' },
    { id: 'black', name: 'Titan Đen', color: 'bg-zinc-900' },
    { id: 'gold', name: 'Titan Vàng', color: 'bg-amber-100' },
  ];

  const bands = [
    { id: 'ocean', name: 'Dây Đeo Ocean', color: 'bg-orange-500' },
    { id: 'trail', name: 'Dây Quấn Trail', color: 'bg-emerald-600' },
    { id: 'milanese', name: 'Dây Lưới Milanese', color: 'bg-slate-400' },
    { id: 'sport', name: 'Dây Thể Thao Cao Su', color: 'bg-blue-600' },
  ];

  return (
    <section id="bands" className="py-20 bg-[#fbfbfd] text-[#1d1d1f] border-t border-gray-200">
      <div className="max-w-[1024px] mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-1 mb-2">
          <AppleLogo className="w-5 h-5 fill-black" />
          <span className="font-semibold text-xl">Watch Studio</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          Bất kỳ vỏ máy nào. Bất kỳ dây đeo nào.<br />Phong cách của riêng bạn.
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-10">
          Trải nghiệm phòng thiết kế tương tác: phối vỏ đồng hồ yêu thích cùng các mẫu dây thể thao, dây da cao cấp và dây kim loại tinh tế.
        </p>

        {/* Interactive Customizer Preview */}
        <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-lg border border-gray-100 flex flex-col items-center">
          {/* Watch Simulator */}
          <div className="relative w-48 h-64 flex flex-col items-center justify-center my-6">
            {/* Top Band */}
            <div className={`w-24 h-16 rounded-t-xl transition-all duration-300 ${
              selectedBand === 'ocean' ? 'bg-orange-500' :
              selectedBand === 'trail' ? 'bg-emerald-600' :
              selectedBand === 'milanese' ? 'bg-slate-400' : 'bg-blue-600'
            }`}></div>

            {/* Case & Face */}
            <div className={`w-36 h-44 rounded-[40px] p-2.5 shadow-xl transition-all duration-300 border-4 ${
              selectedCase === 'titanium' ? 'bg-stone-300 border-stone-400' :
              selectedCase === 'black' ? 'bg-zinc-900 border-zinc-700' : 'bg-amber-100 border-amber-300'
            }`}>
              <div className="w-full h-full bg-black rounded-[32px] flex flex-col items-center justify-center text-white p-3">
                <span className="text-2xl font-light">10:09</span>
                <span className="text-[9px] text-zinc-400 mt-1">CALIFORNIA</span>
              </div>
            </div>

            {/* Bottom Band */}
            <div className={`w-24 h-16 rounded-b-xl transition-all duration-300 ${
              selectedBand === 'ocean' ? 'bg-orange-500' :
              selectedBand === 'trail' ? 'bg-emerald-600' :
              selectedBand === 'milanese' ? 'bg-slate-400' : 'bg-blue-600'
            }`}></div>
          </div>

          {/* Controls */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100 text-left">
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase block mb-2">1. Chọn Vỏ Máy</span>
              <div className="flex gap-3">
                {cases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCase(c.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition ${
                      selectedCase === c.id
                        ? 'border-appleBlue bg-blue-50/50 font-medium text-appleBlue'
                        : 'border-gray-200 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${c.color} border border-black/10`}></span>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase block mb-2">2. Chọn Dây Đeo</span>
              <div className="flex flex-wrap gap-2">
                {bands.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBand(b.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition ${
                      selectedBand === b.id
                        ? 'border-appleBlue bg-blue-50/50 font-medium text-appleBlue'
                        : 'border-gray-200 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${b.color}`}></span>
                    {b.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
