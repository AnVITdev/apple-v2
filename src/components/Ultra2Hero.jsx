import React from 'react';
import AppleLogo from './AppleLogo';

export default function Ultra2Hero() {
  return (
    <section id="ultra-2" className="bg-[#111113] text-white pt-16 pb-20 px-4 text-center border-t border-zinc-800">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <span className="text-gray-300 text-sm">Từ 21.999.000đ hoặc 887.000đ/th. trong 24 th.</span>
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

        {/* Watch Ultra Mockup */}
        <div className="relative w-full max-w-[500px] h-[350px] flex items-center justify-center">
          <div className="relative z-10 w-[260px] h-[310px] rounded-[56px] bg-[#1c1d1f] p-4 shadow-2xl border-4 border-amber-600/30 transition-transform hover:scale-105 duration-500">
            {/* Screen */}
            <div className="w-full h-full rounded-[44px] bg-black border border-zinc-800 flex flex-col justify-between p-5 relative overflow-hidden">
              <div className="flex justify-between items-center text-xs text-orange-400">
                <span className="font-semibold tracking-wider">ĐỘ SÂU 32M</span>
                <span className="text-zinc-400">GPS KÉP</span>
              </div>
              <div className="my-auto text-center">
                <span className="text-5xl font-mono font-medium text-orange-500 tracking-wider">12:45:08</span>
                <span className="text-xs text-zinc-400 mt-2 block font-mono">ĐỘ CAO: 2,450M</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-[10px] text-zinc-400 border-t border-zinc-800">
                <span>PIN: 84%</span>
                <span>NƯỚC: 18°C</span>
              </div>
            </div>

            {/* Action button in Orange */}
            <div className="absolute left-[-10px] top-[100px] w-3 h-16 bg-[#ff4500] rounded-l-md shadow-md"></div>
            {/* Crown guard & Crown */}
            <div className="absolute right-[-12px] top-[70px] w-4 h-16 bg-zinc-600 rounded-r-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
