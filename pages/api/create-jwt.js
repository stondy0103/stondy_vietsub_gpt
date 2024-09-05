// pages/api/create-jwt.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { userId } = req.body;

    // Giấu private key trong biến môi trường
    const privateKey = process.env.JWT_PRIVATE_KEY;

    // Custom payload cho JWT
    const token = jwt.sign(
        { userId }, // Payload chứa thông tin người dùng
        privateKey, // Mã hóa bằng private key
        { algorithm: 'HS256', expiresIn: '1h' } // Cấu hình thuật toán và thời gian hết hạn
    );

    return res.status(200).json({ token });
}
