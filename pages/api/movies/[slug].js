// pages/api/movies/[slug].js
import { supabase } from '../../../lib/supabaseClient';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const token = req.headers.authorization?.split(' ')[1];

    // Kiểm tra nếu không có token được cung cấp
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        // Xác thực và giải mã token
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

        if (decoded) {
            // Lấy slug từ URL
            const { slug } = req.query;

            // Truy vấn Supabase để lấy thông tin phim dựa trên cột slug
            const { data: movie, error: movieError } = await supabase
                .from('movie')
                .select('id, title, genre, description, slug')
                .eq('slug', slug)
                .single(); // Truy vấn một bản ghi duy nhất

            if (movieError || !movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }

            // Truy vấn bảng movie_vietsub_name để lấy thông tin nhân vật Việt hóa dựa trên slug phim
            const { data: vietsubNames, error: vietsubError } = await supabase
                .from('movie_vietsub_name')
                .select('origin_char_name, vietsub_char_name, replace_char_vietsub_name')
                .eq('movie_id', movie['id']); // Truy vấn dựa trên slug của phim

            if (vietsubError || vietsubNames.length === 0) {
                return res.status(404).json({ error: 'No vietsub names found for this movie' });
            }

            // Trả về dữ liệu dưới dạng JSON với định dạng mong muốn
            return res.status(200).json({
                slug: movie.slug,
                title: movie.title,
                genre: movie.genre,
                description: movie.description,
                vietsub_names: vietsubNames.map((name) => ({
                    origin_char_name: name.origin_char_name,
                    vietsub_char_name: name.vietsub_char_name,
                    replace_char_vietsub_name: name.replace_char_vietsub_name || null, // Nếu không có thì trả về null
                })),
            });
        } else {
            return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
        }

    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
    }
}
