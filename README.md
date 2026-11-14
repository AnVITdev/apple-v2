# Apple Homepage Clone (Version 2) 🍎

Bản sao chép chuẩn xác (Pixel-close clone) của trang chủ Apple chính thức [`https://www.apple.com`](https://www.apple.com). Toàn bộ hình ảnh, thanh trượt, banner, nút bấm và chân trang được tái hiện 1:1 theo phong cách thiết kế thực tế của Apple.

![Apple Homepage Clone Preview](https://img.shields.io/badge/Apple_Homepage-Clone_v2-000000?style=for-the-badge&logo=apple&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel Ready](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🌟 Đặc Điểm Nổi Bật (100% Giống Apple.com)

- **Global Navigation Bar**: Thanh điều hướng chuẩn với hiệu ứng kính mờ (`rgba(245,245,247,.8)` + `backdrop-blur`), search flyout, và drawer di động responsive.
- **Hero Items Đầy Đủ**:
  - Banner giới thiệu sản phẩm chủ lực mùa lễ hội với các mốc kích thước chính xác:
    - Desktop: 692px
    - Tablet: 650px
    - Mobile: 500px
- **Product Grid 2x2**: Khung hiển thị các sản phẩm iPhone, Watch, iPad, AirPods, Apple Card và Trade In chuẩn lưới và typography.
- **Thanh Trượt Giải Trí (Apple TV+ Entertainment Carousel)**: Trình diễn các tác phẩm phim độc quyền của Apple TV+ kèm portrait art trên mobile.
- **Chân Trang 5 Cột (5-Column Directory Footer)**: Chân trang đầy đủ chuyên mục danh mục sản phẩm, chuyển thành accordions tương tác trên mobile.
- **Hơn 40+ Tài Nguyên Hình Ảnh Gốc**: Toàn bộ ảnh sản phẩm được lưu cục bộ trong `public/assets/apple/` với 3 kích thước responsive (`_small`, `_medium`, `_large`).

---

## 📁 Cấu Trúc File & Thư Mục

Chi tiết xem tại tài liệu đặc tả: [GEMINI.md](GEMINI.md).

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
├── public/assets/apple/         # 40+ tài nguyên hình ảnh gốc chính thức từ Apple
└── src/
    ├── main.jsx                 # Khởi tạo React App
    ├── App.jsx                  # Điểm kết nối toàn bộ luồng trang
    ├── index.css                # Style toàn cục
    ├── data/content.js          # Dữ liệu nội dung nav, hero, promo, tv+, footer
    └── components/
        ├── AppleLogo.jsx        # SVG glyph chuẩn tỉ lệ Apple
        ├── Navbar.jsx           # Global Nav kính mờ
        ├── Ribbon.jsx           # Banner thông báo ưu đãi
        ├── HeroItem.jsx         # Section hero lớn
        ├── ProductGrid.jsx      # Lưới hiển thị 2 cột
        ├── ProductCard.jsx      # Thẻ sản phẩm
        ├── TileImage.jsx        # Responsive picture tag
        ├── Button.jsx           # Nút bấm chuẩn Apple (radius 980)
        ├── Entertainment.jsx    # Slider phim Apple TV+
        └── Footer.jsx           # Chân trang 5 cột & accordion mobile
```

---

## 🚀 Hướng Dẫn Chạy & Build

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Khởi chạy thử nghiệm (Dev Server)
```bash
npm run dev
```

### 3. Build sản phẩm (Production)
```bash
npm run build
```

---

## 📜 Bản Quyền
Dự án được thực hiện nhằm mục đích học tập và rèn luyện kỹ thuật Frontend. Mọi nhãn hiệu và thiết kế thuộc bản quyền của **Apple Inc.**
