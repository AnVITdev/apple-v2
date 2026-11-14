# Apple Watch Website Clone (Version 2) ⌚🍎

Một bản tái tạo chính xác trang sản phẩm **Apple Watch** theo đúng thiết kế và bố cục chuẩn của [`https://www.apple.com/watch/`](https://www.apple.com/watch/), được xây dựng bằng công nghệ hiện đại **React + Vite + Tailwind CSS**.

![Apple Watch Clone Preview](https://img.shields.io/badge/Apple_Watch-Clone_v2-000000?style=for-the-badge&logo=apple&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel Ready](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🌟 Tính Năng Chính

- **Global Navigation Bar**: Thanh điều hướng chuẩn với hiệu ứng kính mờ (Frosted Glass / Backdrop Blur) cùng responsive drawer trên điện thoại di động.
- **Apple Watch Chapter Nav (Subnav chuyên biệt)**: Thanh điều hướng cuộn ngang các dòng: Series 10, Ultra 2, SE, Nike, Hermès, Dây đeo và So sánh.
- **Showcase Chi Tiết Các Mẫu Đồng Hồ**:
  - **Apple Watch Series 10**: Thiết kế mỏng ấn tượng, màn hình OLED góc rộng, sạc nhanh 80% trong 30 phút.
  - **Apple Watch Ultra 2**: Vỏ titan màu đen mới, GPS tần số kép, pin đến 72 giờ và các tính năng thể thao mạo hiểm.
  - **Apple Watch SE**: Mọi tính năng cốt lõi cho sức khỏe và an toàn với mức giá tiếp cận dễ dàng.
- **Apple Watch Studio (Tính năng tương tác)**: Trải nghiệm phối màu trực tiếp giữa các chất liệu vỏ (Titan tự nhiên, Titan đen, Vàng) và các loại dây đeo (Ocean, Trail, Milanese, Thể thao).
- **Bảng So Sánh Chi Tiết (Compare Table)**: Đặt lên bàn cân kích cỡ, màn hình, chất liệu, thời lượng pin và cảm biến sức khỏe giữa 3 mẫu.
- **Apple Global Footer**: Đầy đủ ghi chú công nghệ, cảm biến và hệ thống liên kết pháp lý.

---

## 📁 Cấu Trúc Mã Nguồn

Chi tiết xem tại tài liệu đặc tả: [GEMINI.md](GEMINI.md).

```text
apple-v2/
├── index.html                   # HTML entry point với favicon Apple SVG
├── package.json                 # Cấu hình dependency & build scripts
├── vite.config.js               # Cấu hình Vite React
├── tailwind.config.js           # Cấu hình theme màu & font chữ Apple
├── postcss.config.js            # Plugin CSS
├── vercel.json                  # Cấu hình định tuyến chuẩn Vercel SPA
├── README.md                    # Tài liệu giới thiệu dự án
├── GEMINI.md                    # Tài liệu đặc tả kỹ thuật chi tiết
└── src/
    ├── main.jsx                 # Khởi tạo React App
    ├── App.jsx                  # Ghép nối các section của trang
    ├── index.css                # CSS toàn cục & Tailwind
    └── components/              # Các component giao diện
        ├── AppleLogo.jsx
        ├── Navbar.jsx
        ├── WatchChapterNav.jsx
        ├── Series10Hero.jsx
        ├── Ultra2Hero.jsx
        ├── SEHero.jsx
        ├── StudioSection.jsx
        ├── CompareTable.jsx
        └── Footer.jsx
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ

### 1. Clone repository
```bash
git clone https://github.com/AnVITdev/apple-v2.git
cd apple-v2
```

### 2. Cài đặt thư viện
```bash
npm install
```

### 3. Chạy môi trường Development
```bash
npm run dev
```
Trang web sẽ chạy tại: **http://localhost:5173**

### 4. Build bản Production
```bash
npm run build
```

---

## ☁️ Triển Khai Lên Vercel

Dự án đã được tối ưu sẵn file `vercel.json`:
1. Kết nối repository `apple-v2` trên [Vercel Dashboard](https://vercel.com).
2. Framework Preset: **Vite** (hoặc Other).
3. Bấm **Deploy**. Vercel sẽ tự động build và cấp phát tên miền trực tuyến miễn phí.

---

## 📜 Bản Quyền
Dự án được thực hiện nhằm mục đích học tập và rèn luyện kỹ thuật Frontend. Mọi nhãn hiệu và thiết kế thuộc bản quyền của **Apple Inc.**
