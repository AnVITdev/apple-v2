import React from 'react';
import AppleLogo from './AppleLogo';

export default function SEHero() {
  return (
    <section id="se" className="bg-[#f5f5f7] text-[#1d1d1f] pt-16 pb-16 px-4 text-center border-t border-gray-200 overflow-hidden">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <span className="text-gray-700 text-sm">Từ 5.999.000đ hoặc 242.000đ/th. trong 24 th.</span>
          <div className="flex items-center gap-3">
            <a
              href="#compare"
              className="bg-appleBlue hover:bg-appleBlue-hover text-white text-sm px-5 py-2 rounded-full font-normal transition"
            >
              Mua ngay
            </a>
            <a
              href="#compare"
              className="text-appleBlue text-sm hover:underline font-normal"
            >
              Tìm hiểu thêm &gt;
            </a>
          </div>
        </div>

        {/* Real Product Image for SE */}
        <div className="relative w-full max-w-[550px] flex items-center justify-center my-6">
          <img
            src="/assets/se3.png"
            alt="Apple Watch SE"
            className="w-full max-h-[380px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
