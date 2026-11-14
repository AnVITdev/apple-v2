# GEMINI.md - Đặc Tả Kỹ Thuật Pixel-Close Apple Homepage Clone v2

Tài liệu đặc tả toàn diện về cấu trúc, thiết kế, công nghệ và dữ liệu tài nguyên của dự án **Apple Homepage Clone (Version 2)** theo chuẩn sao chép 1:1 từ `https://www.apple.com`.

---

## 1. Tổng Quan Dự Án (Project Overview)
- **Tên dự án:** Apple Homepage Clone v2
- **Website mục tiêu:** `https://www.apple.com/`
- **Mục tiêu:** Tái hiện 100% giao diện trang chủ Apple (Pixel-Close) từ thanh điều hướng, các hero banner lớn, lưới sản phẩm 2 cột, thanh trượt phim Apple TV+ (Entertainment Carousel) và toàn bộ chân trang 5 cột.
- **Nguồn tài nguyên:** 43 tài nguyên ảnh gốc độ phân giải cao trích xuất từ Apple CDN được phục vụ trực tiếp qua đường dẫn tương đối `public/assets/apple/`.

---

## 2. Thông Số Token Thiết Kế (Observed Apple Design Tokens)

Dựa trên số liệu trích xuất CDP từ trang chính thức:

| Thành phần | Desktop (≥1069px) | Tablet (735–1068px) | Mobile (≤734px) |
| :--- | :--- | :--- | :--- |
| **Chiều cao Global Nav** | 44px | 44px | 48px |
| **Chiều cao Hero Tile** | 692px | 650px | 500px |
| **Chiều cao Promo Tile** | 580px | 490px | 500px |
| **Hero Headline** | 56px / 60px line, font-weight 600 | 48px / 52px, 600 | 32px / 36px, 600 |
| **Hero Subhead** | 28px / 32px | 24px / 28px | 19px / 23px |
| **Promo Headline** | 40px / 44px, 600 | 32px / 36px, 600 | 32px / 36px, 600 |
| **Promo Subhead** | 21px / 25px | 19px / 23px | 19px / 23px |
| **Nút CTA** | 17px, chiều cao 44px, bo góc 980px | 17px, chiều cao 44px | 14px, chiều cao 36px |
| **Màu chữ chính** | `#1d1d1f` | `#1d1d1f` | `#1d1d1f` |
| **Màu nền tile / footer**| `#f5f5f7` | `#f5f5f7` | `#f5f5f7` |
| **Màu nút CTA chính** | `#0071e3` (Hover: `#0077ed`) | `#0071e3` | `#0071e3` |
| **Khoảng cách Grid (Gap)**| 12px | 12px | 12px |
| **Chân trang (Footer)** | 5 cột, độ rộng tối đa 980px | 5 cột | Accordions thu gọn |

---

## 3. Bản Đồ Thành Phần (Component Map)

```text
apple-v2/
├── index.html                   # Entry point với vector logo Apple
├── package.json                 # Cấu hình dependency
├── vite.config.js               # Cấu hình Vite React
├── tailwind.config.js           # Cấu hình breakpoint và tokens Apple
├── postcss.config.js            # PostCSS & Autoprefixer
├── vercel.json                  # Cấu hình routing SPA Vercel
├── README.md                    # Giới thiệu dự án
├── GEMINI.md                    # Đặc tả kỹ thuật
├── public/assets/apple/         # 43 tài nguyên ảnh gốc (hero, promo, ent)
└── src/
    ├── App.jsx                  # Điểm kết nối trang chủ hoàn chỉnh
    ├── data/content.js          # Dữ liệu nội dung nav, hero, promo, tv+, footer
    ├── components/
        ├── Navbar.jsx           # Global Nav kính mờ, search flyout, mobile drawer
        ├── AppleLogo.jsx        # SVG Vector Glyph logo Apple (viewBox 0 0 14 44)
        ├── Ribbon.jsx           # Banner quảng bá
        ├── HeroItem.jsx         # Khối Hero (500/650/692px) kèm CTA
        ├── ProductGrid.jsx      # Lưới hiển thị 1/2 cột
        ├── ProductCard.jsx      # Biến thể thẻ tối, sáng, split và logo-led
        ├── TileImage.jsx        # Thẻ <picture> art direction linh hoạt
        ├── Button.jsx           # Nút bấm chuẩn Apple (radius 980)
        ├── Entertainment.jsx    # Slider phim Apple TV+ với portrait art mobile
        └── Footer.jsx           # Danh bạ 5 cột & accordion mobile
```

---

## 4. Hướng Dẫn Vận Hành & Build

- **Chạy dev:** `npm run dev`
- **Build production:** `npm run build` (xuất ra thư mục `dist/`)
- **Triển khai Vercel:** Preset `Vite`, tự động định tuyến toàn bộ trang thông qua `vercel.json`.
