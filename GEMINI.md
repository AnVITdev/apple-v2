# GEMINI.md - Đặc Tả Kỹ Thuật Dự Án Apple Watch Clone v2

Tài liệu đặc tả toàn diện về cấu trúc, thiết kế, công nghệ và quy trình triển khai của dự án **Apple Watch Website Clone (Version 2)** theo chuẩn yêu cầu và phong cách của `https://www.apple.com/watch/`.

---

## 1. Tổng Quan Dự Án (Project Overview)
- **Tên dự án:** Apple Watch Website Clone v2
- **Website mục tiêu:** `https://www.apple.com/watch/`
- **Mục tiêu:** Tái hiện chính xác trải nghiệm trang sản phẩm chuyên biệt của Apple Watch, bao gồm thanh điều hướng phụ (Chapter Navigation), các sản phẩm chủ lực (Series 10, Ultra 2, SE), bộ công cụ phối phụ kiện tương tác (Watch Studio) và bảng so sánh thông số kỹ thuật (Compare).
- **Nền tảng triển khai:** GitHub + Vercel (CI/CD tự động).

---

## 2. Kiến Trúc Công Nghệ (Tech Stack)
- **Framework:** React 18 (`react`, `react-dom`)
- **Build Tool:** Vite 6 (tối ưu tốc độ HMR và bundle cực nhẹ)
- **Styling:** Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Icons:** Lucide React (`lucide-react`)
- **Typography:** San Francisco System Font Fallback:
  ```css
  -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif
  ```
- **Deployment Spec:** Cấu hình chuẩn Vercel SPA (`rewrites` to `/index.html`, Output Directory: `dist`).

---

## 3. Cấu Trúc File & Thành Phần (File Structure & Components)

```text
apple-v2/
├── index.html                   # Entry point HTML với Apple SVG Favicon & viewport chuẩn
├── package.json                 # Metadata, dependencies và npm scripts
├── vite.config.js               # Cấu hình plugin React cho Vite
├── tailwind.config.js           # Mở rộng màu sắc Apple, typography SF
├── postcss.config.js            # Thiết lập Tailwind & Autoprefixer
├── vercel.json                  # Cấu hình routing SPA cho Vercel không bị 404
├── .gitignore                   # Loại trừ node_modules, dist, logs
├── README.md                    # Hướng dẫn chi tiết sử dụng & khởi chạy
├── GEMINI.md                    # Tài liệu đặc tả kỹ thuật dự án (file này)
└── src/
    ├── main.jsx                 # Khởi tạo React DOM Root
    ├── App.jsx                  # Điểm kết nối toàn bộ luồng trang
    ├── index.css                # Tailwind directives & custom scrollbars
    └── components/
        ├── AppleLogo.jsx        # SVG Vector Logo quả táo cắn dở chuẩn Apple
        ├── Navbar.jsx           # Thanh Global Navigation mờ kính (Frosted Glass)
        ├── WatchChapterNav.jsx  # Chapter Nav cuộn ngang danh mục các dòng Watch
        ├── Series10Hero.jsx     # Section Apple Watch Series 10 (Titan Sa Mạc, màn hình OLED góc rộng)
        ├── Ultra2Hero.jsx       # Section Apple Watch Ultra 2 (Vỏ Titan đen, GPS tần số kép)
        ├── SEHero.jsx           # Section Apple Watch SE (Giá tốt, đầy đủ tính năng thiết yếu)
        ├── StudioSection.jsx    # Bộ công cụ Watch Studio tương tác phối mặt & dây đeo trực tiếp
        ├── CompareTable.jsx     # Bảng so sánh trực quan thông số, kích cỡ, thời lượng pin
        └── Footer.jsx           # Chân trang Apple chuẩn với đầy đủ chú thích pháp lý
```

---

## 4. Đặc Điểm Thiết Kế & Trải Nghiệm (Design Specifications)

### 4.1. Hệ Thống Màu Sắc (Color Tokens)
- Nền tối Series 10 & Ultra 2: `#000000` và `#111113`
- Nền sáng SE & Watch Studio: `#f5f5f7` và `#fbfbfd`
- Màu điểm nhấn thương hiệu (Apple Blue): `#0071e3` (Hover: `#0077ed`)
- Màu nhấn cảnh báo / Thể thao: Cam Ultra (`#ff9f0a`, `#ff4500`), Đỏ Series 10 (`#ff3b30`)
- Text chính: `#1d1d1f` (trên nền sáng), `#f5f5f7` (trên nền tối)
- Subtext: `#86868b`

### 4.2. Chapter Navigation (Thanh điều hướng phụ của Apple Watch)
- Hỗ trợ cuộn ngang (horizontal scroll) mượt mà trên mobile.
- Biểu tượng vector trực quan cho từng dòng: Series 10, Ultra 2, SE, Nike, Hermès, So sánh, Dây đeo.
- Gắn thẻ tag "Mới" với tone cam `#f56300` theo đúng website Apple.

### 4.3. Interactive Apple Watch Studio
- Cho phép người dùng chuyển đổi trực tiếp giữa các chất liệu vỏ (Titan tự nhiên, Titan đen, Titan vàng).
- Thay đổi ngay tức thì màu sắc và kiểu dáng dây đeo (Dây Ocean, Dây Trail, Dây Milanese, Dây cao su).

---

## 5. Hướng Dẫn Vận Hành & Build (Deployment Guide)

### Chạy cục bộ:
```bash
npm install
npm run dev
```

### Build Production:
```bash
npm run build
```
Thư mục xuất bản: `dist/`.

### Triển khai trên Vercel:
- **Framework Preset:** Vite
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
