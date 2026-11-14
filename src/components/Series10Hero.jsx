import React from 'react';
import AppleLogo from './AppleLogo';

export default function Series10Hero() {
  return (
    <section id="series-10" className="bg-[#000000] text-white pt-16 pb-12 px-4 text-center overflow-hidden">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="flex items-center justify-center space-x-2 text-2xl md:text-3xl font-semibold tracking-tight mb-1">
          <AppleLogo className="w-6 h-6 fill-white" />
          <span>WATCH</span>
        </div>
        <p className="text-[#ff3b30] text-xs md:text-sm font-semibold tracking-[0.2em] mb-4">
          SERIES 10
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl leading-tight mb-3">
          Mỏng ấn tượng.<br />Màn hình lớn vượt bậc.
        </h2>

        <p className="text-gray-400 text-lg md:text-xl font-normal max-w-xl mb-6">
          Chiếc Apple Watch mỏng nhất từ trước đến nay với diện tích màn hình hiển thị lớn nhất từng có.
        </p>

        {/* Pricing & CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <span className="text-gray-300 text-sm">Từ 10.999.000đ hoặc 443.000đ/th. trong 24 th.</span>
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

        {/* Real Product Imagery */}
        <div className="relative w-full max-w-[650px] flex items-center justify-center my-6">
          <img
            src="/assets/s12.png"
            alt="Apple Watch Series 10 Jet Black"
            className="w-full max-h-[420px] object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full max-w-3xl text-left">
          <div className="bg-zinc-900/70 p-4 rounded-2xl border border-zinc-800">
            <h4 className="text-white text-sm font-semibold mb-1">Màn hình OLED góc rộng</h4>
            <p className="text-zinc-400 text-xs">Sáng hơn tới 40% khi nhìn từ một góc nghiêng.</p>
          </div>
          <div className="bg-zinc-900/70 p-4 rounded-2xl border border-zinc-800">
            <h4 className="text-white text-sm font-semibold mb-1">Thiết kế mỏng hơn 10%</h4>
            <p className="text-zinc-400 text-xs">Đeo thoải mái suốt ngày dài và trong giấc ngủ.</p>
          </div>
          <div className="bg-zinc-900/70 p-4 rounded-2xl border border-zinc-800">
            <h4 className="text-white text-sm font-semibold mb-1">Cảm biến nhiệt độ nước & độ sâu</h4>
            <p className="text-zinc-400 text-xs">Lý tưởng cho bơi lội và lặn với ống thở.</p>
          </div>
          <div className="bg-zinc-900/70 p-4 rounded-2xl border border-zinc-800">
            <h4 className="text-white text-sm font-semibold mb-1">Sạc nhanh vượt trội</h4>
            <p className="text-zinc-400 text-xs">Đạt tới 80% pin chỉ sau khoảng 30 phút.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
