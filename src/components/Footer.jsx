import React from 'react';
import AppleLogo from './AppleLogo';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#86868b] text-[12px] leading-relaxed pt-8 pb-12 border-t border-gray-200">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes */}
        <div className="space-y-3 pb-8 border-b border-gray-300">
          <p>
            * Giá hiển thị là giá bán lẻ đã bao gồm thuế VAT. Phí giao hàng có thể được áp dụng tùy theo điều kiện đặt hàng.
          </p>
          <p>
            1. Thời lượng pin thay đổi tùy theo cách sử dụng và cấu hình. Apple Watch Series 10 có thời lượng pin lên đến 18 giờ với mức sử dụng thông thường và lên đến 36 giờ ở Chế Độ Nguồn Điện Thấp.
          </p>
          <p>
            2. Màn hình OLED góc rộng của Apple Watch Series 10 sáng hơn đến 40% so với thế hệ trước khi nhìn từ các góc nghiêng.
          </p>
          <p>
            3. Apple Watch Ultra 2 có khả năng chống nước ở độ sâu 100 mét theo tiêu chuẩn ISO 22810. Thiết bị có thể được sử dụng khi lặn giải trí với bình dưỡng khí ở độ sâu đến 40 mét.
          </p>
          <p>
            4. Ứng dụng ECG và tính năng thông báo nhịp tim không đều yêu cầu các phiên bản watchOS và iOS mới nhất và không dành cho người dưới 22 tuổi.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 text-gray-600">
          <AppleLogo className="w-3.5 h-3.5 fill-current" />
          <span>&gt;</span>
          <span className="text-[#1d1d1f]">Watch</span>
        </div>

        {/* Links Directory */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-b border-gray-300">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Khám Phá Watch</h4>
            <ul className="space-y-1.5">
              <li><a href="#series-10" className="hover:text-gray-900 hover:underline">Apple Watch Series 10</a></li>
              <li><a href="#ultra-2" className="hover:text-gray-900 hover:underline">Apple Watch Ultra 2</a></li>
              <li><a href="#se" className="hover:text-gray-900 hover:underline">Apple Watch SE</a></li>
              <li><a href="#nike" className="hover:text-gray-900 hover:underline">Apple Watch Nike</a></li>
              <li><a href="#hermes" className="hover:text-gray-900 hover:underline">Apple Watch Hermès</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Mua Sắm Đồng Hồ</h4>
            <ul className="space-y-1.5">
              <li><a href="#compare" className="hover:text-gray-900 hover:underline">So Sánh Các Mẫu Watch</a></li>
              <li><a href="#bands" className="hover:text-gray-900 hover:underline">Dây Đeo Apple Watch</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Phụ Kiện Apple Watch</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Apple Watch Studio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tài Khoản</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Quản Lý Apple ID</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Tài Khoản Apple Store</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">iCloud.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Về Apple</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Phòng Báo Chí</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Lãnh Đạo Apple</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Cơ Hội Nghề Nghiệp</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Đầu Tư</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] gap-2">
          <p>Bản quyền © 2026 Apple Inc. Bảo lưu mọi quyền.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-gray-900 hover:underline">Chính Sách Quyền Riêng Tư</a>
            <a href="#" className="hover:text-gray-900 hover:underline">Điều Khoản Sử Dụng</a>
            <a href="#" className="hover:text-gray-900 hover:underline">Bán Hàng và Hoàn Tiền</a>
            <a href="#" className="hover:text-gray-900 hover:underline">Pháp Lý</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
