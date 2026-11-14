import React from 'react';
import AppleLogo from './AppleLogo';
import { Heart, Activity, Waves, BatteryCharging, ShieldCheck, Sparkles } from 'lucide-react';

export default function CompareTable() {
  const models = [
    {
      name: 'Apple Watch Series 10',
      tagline: 'Mỏng hơn. Màn hình lớn hơn.',
      price: 'Từ 10.999.000đ',
      colors: ['bg-black', 'bg-zinc-400', 'bg-amber-100', 'bg-slate-700'],
      size: '46mm hoặc 42mm',
      screen: 'Màn hình OLED góc rộng, luôn bật lên tới 2000 nit',
      material: 'Nhôm bóng hoặc Titan đánh bóng',
      battery: 'Lên đến 18 giờ (36 giờ ở Chế Độ Nguồn Điện Thấp). Sạc 80% trong 30 phút.',
      features: [
        'Thông báo nhịp tim cao/thấp & loạn nhịp',
        'Ứng dụng ECG đo điện tâm đồ',
        'Cảm biến nhiệt độ nước & độ sâu đến 6m',
        'Phát hiện va chạm & ngã',
      ],
      isPopular: true
    },
    {
      name: 'Apple Watch Ultra 2',
      tagline: 'Thiết kế bền bỉ tối thượng.',
      price: 'Từ 21.999.000đ',
      colors: ['bg-stone-300', 'bg-zinc-800'],
      size: '49mm',
      screen: 'Màn hình Retina luôn bật lên tới 3000 nit',
      material: 'Vỏ Titan tự nhiên hoặc Titan đen',
      battery: 'Lên đến 36 giờ (72 giờ ở Chế Độ Nguồn Điện Thấp)',
      features: [
        'Chống nước ở độ sâu 100m, lặn đến 40m',
        'GPS tần số kép chuẩn xác cao',
        'Nút Tác Vụ tùy chỉnh chuyên biệt',
        'Còi báo động 86-decibel',
      ],
      isPopular: false
    },
    {
      name: 'Apple Watch SE',
      tagline: 'Mọi tính năng cần thiết.',
      price: 'Từ 5.999.000đ',
      colors: ['bg-slate-900', 'bg-zinc-200', 'bg-amber-50'],
      size: '44mm hoặc 40mm',
      screen: 'Màn hình Retina lên tới 1000 nit',
      material: 'Vỏ Nhôm tái chế 100%',
      battery: 'Lên đến 18 giờ sử dụng cả ngày',
      features: [
        'Thông báo nhịp tim & sức khỏe',
        'Theo dõi giấc ngủ chuyên sâu',
        'Chống nước ở độ sâu 50m khi bơi lội',
        'Phát hiện va chạm & SOS Khẩn cấp',
      ],
      isPopular: false
    }
  ];

  return (
    <section id="compare" className="py-20 bg-white text-[#1d1d1f] border-t border-gray-100">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Mẫu Apple Watch nào phù hợp với bạn?
          </h2>
          <p className="text-gray-500 text-lg">
            So sánh kích thước, chất liệu, tính năng sức khỏe và thời lượng pin.
          </p>
        </div>

        {/* 3 Columns Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                model.isPopular
                  ? 'border-appleBlue/30 shadow-xl bg-gradient-to-b from-blue-50/20 to-white'
                  : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {model.isPopular && (
                  <span className="inline-block bg-appleBlue text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-4">
                    PHỔ BIẾN NHẤT
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{model.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{model.tagline}</p>
                <div className="text-lg font-semibold text-gray-900 mb-6">{model.price}</div>

                {/* Color swatches */}
                <div className="flex gap-2 mb-6">
                  {model.colors.map((c, i) => (
                    <div key={i} className={`w-4 h-4 rounded-full border border-gray-300 ${c}`} />
                  ))}
                </div>

                <div className="space-y-6 text-sm border-t border-gray-100 pt-6">
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold block mb-1">Kích cỡ</span>
                    <p className="font-medium text-gray-800">{model.size}</p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold block mb-1">Màn hình</span>
                    <p className="text-gray-700 text-xs leading-relaxed">{model.screen}</p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold block mb-1">Chất liệu</span>
                    <p className="text-gray-700 text-xs">{model.material}</p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold block mb-1">Pin & Năng lượng</span>
                    <p className="text-gray-700 text-xs leading-relaxed">{model.battery}</p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold block mb-2">Tính năng chính</span>
                    <ul className="space-y-2">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-gray-600 gap-2">
                          <span className="text-appleBlue font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2">
                <button className="w-full bg-appleBlue hover:bg-appleBlue-hover text-white py-2 rounded-full text-sm font-medium transition">
                  Chọn mua
                </button>
                <a href="#" className="text-center text-xs text-appleBlue hover:underline py-1">
                  Xem chi tiết kỹ thuật
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
