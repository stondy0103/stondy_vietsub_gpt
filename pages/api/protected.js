// pages/api/protected.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const token = req.headers.authorization?.split(' ')[1]; // Lấy JWT từ header

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        // Giấu private key trong biến môi trường
        const privateKey = process.env.JWT_PRIVATE_KEY;

        // Xác thực JWT
        const decoded = jwt.verify(token, privateKey);

        // Truy xuất thông tin từ JWT sau khi xác thực thành công
        const userId = decoded.userId;

        return res.status(200).json({ message: `User ${userId} authenticated successfully.` });
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}
