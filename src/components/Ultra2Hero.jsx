import React from 'react';
import AppleLogo from './AppleLogo';

export default function Ultra2Hero() {
  return (
    <section id="ultra-2" className="bg-[#111113] text-white pt-16 pb-16 px-4 text-center border-t border-zinc-800 overflow-hidden">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="flex items-center justify-center space-x-2 text-2xl md:text-3xl font-semibold tracking-tight mb-1">
          <AppleLogo className="w-6 h-6 fill-white" />
          <span>WATCH</span>
        </div>
        <p className="text-[#ff9f0a] text-xs md:text-sm font-semibold tracking-[0.2em] mb-4">
          ULTRA 2
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl leading-tight mb-3">
          Sắc đen mới lôi cuốn.<br />Bền bỉ vô song.
        </h2>

        <p className="text-gray-400 text-lg md:text-xl font-normal max-w-xl mb-6">
          Vỏ titan màu đen mới cứng cáp. Màn hình sáng nhất từng thấy trên thiết bị Apple. Thời lượng pin lên đến 72 giờ.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <span className="text-gray-300 text-sm">Từ 21.999.000đ hoặc 887.000đ/th. trong 24 th.</span>
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

        {/* Real Product Image for Ultra 2 */}
        <div className="relative w-full max-w-[650px] flex items-center justify-center my-6">
          <img
            src="/assets/u4.png"
            alt="Apple Watch Ultra 2 Titanium"
            className="w-full max-h-[420px] object-contain drop-shadow-[0_20px_50px_rgba(255,159,10,0.15)] transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
