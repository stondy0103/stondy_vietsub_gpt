// pages/api/movies/[slug].js
import { supabase } from '@/lib/supabaseClient';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    try {
         // Lấy slug từ URL
        const {slug} = req.query;
        const {data: movie, error: movieError} = await supabase
            .from('movie')
            .select('id, title, genre, description, slug')
            .eq('slug', slug)
            .single();
        if (movieError || !movie) {
            return res.status(404).json({error: 'Movie not found'});
        }
        const {data: vietsubNames, error: vietsubError} = await supabase
            .from('movie_vietsub_name')
            .select('origin_char_name, vietsub_char_name, replace_char_vietsub_name')
            .eq('movie_id', movie['id']);
        if (vietsubError || vietsubNames.length === 0) {
            return res.status(404).json({error: 'No vietsub names found for this movie'});
        }
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

    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
    }
}
