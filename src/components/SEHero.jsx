import React from 'react';
import AppleLogo from './AppleLogo';

export default function SEHero() {
  return (
    <section id="se" className="bg-[#f5f5f7] text-[#1d1d1f] pt-16 pb-20 px-4 text-center border-t border-gray-200">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="flex items-center justify-center space-x-2 text-2xl md:text-3xl font-semibold tracking-tight mb-1">
          <AppleLogo className="w-6 h-6 fill-black" />
          <span>WATCH</span>
        </div>
        <p className="text-gray-500 text-xs md:text-sm font-semibold tracking-[0.2em] mb-4">
          SE
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl leading-tight mb-3">
          Rất nhiều điều để yêu.<br />Vừa vặn túi tiền.
        </h2>

        <p className="text-gray-600 text-lg md:text-xl font-normal max-w-xl mb-6">
          Các tính năng thiết yếu giúp bạn duy trì kết nối, vận động năng động, chăm sóc sức khỏe và đảm bảo an toàn.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <span className="text-gray-700 text-sm">Từ 5.999.000đ hoặc 242.000đ/th. trong 24 th.</span>
          <div className="flex items-center gap-3">
            <a
              href="#compare"
              className="bg-appleBlue hover:bg-appleBlue-hover text-white text-sm px-4 py-2 rounded-full font-normal transition"
            >
              Mua ngay
            </a>
            <a
              href="#"
              className="text-appleBlue text-sm hover:underline font-normal"
            >
              Tìm hiểu thêm &gt;
            </a>
          </div>
        </div>

        {/* SE Mockup */}
        <div className="relative w-full max-w-[500px] h-[300px] flex items-center justify-center">
          <div className="relative z-10 w-[220px] h-[270px] rounded-[48px] bg-white p-3.5 shadow-xl border-4 border-gray-200 transition-transform hover:scale-105 duration-500">
            {/* Screen */}
            <div className="w-full h-full rounded-[38px] bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col justify-between p-4 relative overflow-hidden">
              <div className="text-right">
                <span className="text-xs font-semibold text-blue-600">HOẠT ĐỘNG</span>
              </div>
              <div className="text-center my-auto">
                <span className="text-5xl font-light tracking-tight text-gray-900 block">10:09</span>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500 font-medium">
                VÒNG HOẠT ĐỘNG
              </div>
            </div>

            {/* Crown */}
            <div className="absolute right-[-8px] top-[50px] w-2.5 h-12 bg-gray-400 rounded-r-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
