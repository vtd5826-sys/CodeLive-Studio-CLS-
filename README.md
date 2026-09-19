# CodeLive Studio (CLS)

CodeLive Studio (CLS) là nền tảng mô hình cho phép thực thi và chạy trực tiếp các đoạn mã HTML/CSS/JS ngay trên trình duyệt, kết hợp hệ thống xác thực tài khoản bảo mật.

## Tính năng chính
1. **Xác thực & Tạo tài khoản Google:** Hỗ trợ đăng nhập và đăng ký nhanh chóng qua Google.
2. **Xác minh & Lưu trữ Server:** Dữ liệu người dùng được lưu trữ an toàn trên máy chủ, có cơ chế kiểm tra tài khoản đã tồn tại hay chưa.
3. **Thông báo Discord tự động:** Khi có tài khoản mới được tạo, hệ thống sẽ gửi thông báo về Discord (**chỉ gửi tên hiển thị, bảo mật tuyệt đối không gửi mật khẩu**).
4. **Nhớ phiên đăng nhập:** Tự động lưu tên tài khoản trên máy người dùng.
5. **CodeLive Studio (CLS Model):** Mô hình biên tập và chạy một hoặc nhiều đoạn mã HTML trực tiếp với Live Preview thời gian thực.

## Cài đặt và Chạy dự án
1. Clone repository này về máy.
2. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install express axios
