import React from 'react';
import AppleLogo from './AppleLogo';

export default function StudioSection() {
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
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-8">
          Khám phá bộ sưu tập dây đeo chính hãng đa dạng: Dây Thể Thao, Dây Vải Dệt Trail Loop, Dây Thép Milanese và Dây Da Hermès cao cấp.
        </p>

        <div className="mb-8">
          <a
            href="#compare"
            className="inline-block bg-appleBlue hover:bg-appleBlue-hover text-white text-sm px-6 py-2.5 rounded-full font-medium transition"
          >
            Tạo phong cách của bạn
          </a>
        </div>

        {/* Real Essentials & Bands Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white flex flex-col justify-between group">
            <div className="p-8 text-left">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">Dây đeo Apple Watch</span>
              <h3 className="text-2xl font-bold mb-2">Sắc màu mùa lễ hội rực rỡ.</h3>
              <p className="text-gray-500 text-sm">Dễ dàng thay đổi diện mạo chiếc đồng hồ chỉ trong tích tắc.</p>
            </div>
            <div className="overflow-hidden">
              <img
                src="/assets/essentials.jpg"
                alt="Apple Watch Bands Collection"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white flex flex-col justify-between group">
            <div className="p-8 text-left">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">Apple Fitness+</span>
              <h3 className="text-2xl font-bold mb-2">Tập luyện cùng Apple Watch.</h3>
              <p className="text-gray-500 text-sm">Từ HIIT, Yoga đến Thiền định, hiển thị chỉ số nhịp tim trực tiếp trên màn hình.</p>
            </div>
            <div className="overflow-hidden">
              <img
                src="/assets/fitness.jpg"
                alt="Apple Fitness+ with Apple Watch"
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
