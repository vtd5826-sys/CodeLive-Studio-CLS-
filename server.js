const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1550850102019752000/c7tu35sFQrQqx6J4zo-lavh4WRAof6-QQ6QI_o-F8xJgJI6intRZrfYrFq9qzdPQaaSZ';
let users = []; // Giả lập cơ sở dữ liệu trên máy chủ

// 1. Tạo tài khoản / Đăng ký (sau khi xác thực Google)
app.post('/api/register', async (req, res) => {
    const { email, name, password, googleId } = req.body;
    const existingUser = users.find(u => u.email === email || (googleId && u.googleId === googleId));
    
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'Tài khoản đã tồn tại trên máy chủ!' });
    }

    const newUser = { email, name, password: password || null, googleId: googleId || null };
    users.push(newUser);

    // Gửi thông báo về Discord (CHỈ GỬI TÊN, KHÔNG GỬI MẬT KHẨU)
    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            content: `🎉 Thành viên mới vừa tạo tài khoản: **${name}**`
        });
    } catch (error) {
        console.error('Lỗi gửi Discord:', error);
    }

    res.json({ success: true, message: 'Tạo tài khoản thành công!', user: { name, email } });
});

// 2. Đăng nhập (Xác minh đã có tài khoản hay chưa)
app.post('/api/login', (req, res) => {
    const { email, password, googleId } = req.body;
    let user = googleId 
        ? users.find(u => u.googleId === googleId || u.email === email)
        : users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ success: false, message: 'Xác minh thất bại: Tài khoản chưa tồn tại hoặc sai thông tin!' });
    }

    res.json({ success: true, message: 'Đăng nhập thành công!', user: { name: user.name, email: user.email } });
});

app.listen(3000, () => console.log('Server CodeLive Studio đang chạy tại cổng 3000'));
