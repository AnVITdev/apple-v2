import React from 'react';
import AppleLogo from './AppleLogo';

export default function Series10Hero() {
  return (
    <section id="series-10" className="bg-[#000000] text-white pt-16 pb-20 px-4 text-center overflow-hidden">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center">
        {/* Logo Title */}
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
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <span className="text-gray-300 text-sm">Từ 10.999.000đ hoặc 443.000đ/th. trong 24 th.</span>
          <div className="flex items-center gap-3">
            <a
              href="#compare"
              className="bg-appleBlue hover:bg-appleBlue-hover text-white text-sm px-4 py-2 rounded-full font-normal transition"
            >
              Mua ngay
            </a>
            <a
              href="#features"
              className="text-appleBlue text-sm hover:underline font-normal"
            >
              Tìm hiểu thêm &gt;
            </a>
          </div>
        </div>

        {/* Visual Mockup - Series 10 Jet Black */}
        <div className="relative w-full max-w-[500px] h-[340px] flex items-center justify-center mt-4">
          {/* Subtle glow backdrop */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/40 to-transparent rounded-full filter blur-2xl transform scale-90"></div>

          {/* Watch Device Representation */}
          <div className="relative z-10 w-[240px] h-[290px] rounded-[52px] bg-gradient-to-b from-zinc-900 to-black p-3.5 shadow-2xl border-4 border-zinc-700/80 transition-transform hover:scale-105 duration-500">
            {/* Screen */}
            <div className="w-full h-full rounded-[42px] bg-black border border-zinc-800 flex flex-col justify-between p-5 relative overflow-hidden">
              <div className="flex justify-between items-center text-xs text-zinc-400">
                <span className="text-[#ff9f0a] font-medium text-xs">THỨ 7 14</span>
                <span className="text-zinc-500">22°C</span>
              </div>
              <div className="my-auto text-center">
                <span className="text-6xl font-light tracking-tight text-white block">09:41</span>
                <span className="text-[11px] text-[#30d158] font-medium tracking-wide mt-1 block">
                  ● OXI TRONG MÁU 98%
                </span>
              </div>
              <div className="flex justify-around items-center pt-2 border-t border-zinc-900">
                <span className="text-[10px] text-zinc-400">NHỊP TIM 68</span>
                <span className="text-[10px] text-zinc-400">VẬN ĐỘNG 540</span>
              </div>
            </div>

            {/* Digital Crown */}
            <div className="absolute right-[-10px] top-[60px] w-3 h-14 bg-zinc-700 rounded-r-md border-l border-zinc-900"></div>
            {/* Side button */}
            <div className="absolute right-[-8px] top-[150px] w-2 h-16 bg-zinc-800 rounded-r-sm"></div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-3xl text-left">
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
