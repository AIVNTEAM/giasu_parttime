# giasu_parttime

1. Chay server (su dung express-server)
- Vao thu muc: express-server va mo terminal
- Start server bang lenh: node server

Cập nhật 28/07: dùng server Lumen - thư mục server
- Vào thư mục server, mở terminal và chạy lệnh: 
composer update
để cài đặt các thư viện cần thiết cho lumen
- chạy lệnh: php -S localhost:8000 -t public
để start server
Nếu hiển thị: 
PHP 7.1.11 Development Server started at Sun Jul 28 20:17:14 2019
Listening on http://localhost:8000
Document root is D:\DEVELOPMENT\angular\Lumen_Angular\server\public
Press Ctrl-C to quit.
là thành công

2. Chay client
- Vao thu muc client va mo terminal
- Chạy lệnh:
npm install
để cài đặt các thư viện cần thiết (được đặc tả trong package.json)
- chay client voi lenh: 
	ng serve --open