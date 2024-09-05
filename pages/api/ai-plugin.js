// pages/api/ai-plugin.js
export default function handler(req, res) {
    // JSON chứa định nghĩa OpenAPI
    const aiPlugins = {
        "schema_version": "v1",
        "name_for_human": "Movie Vietsub Plugin",
        "name_for_model": "movie_vietsub",
        "description_for_human": "Plugin để lấy thông tin phim và các tên nhân vật Việt hóa.",
        "description_for_model": "Lấy thông tin phim và các tên nhân vật Việt hóa dựa trên slug phim.",
        "auth": {
            "type": "none"
        },
        "api": {
            "type": "openapi",
            "url": "https://stondy-vietsub-gpt.vercel.app/openapi",
            "is_user_authenticated": false
        },
        "logo_url": "https://stondy-vietsub-gpt.vercel.app/logo.png",
        "contact_email": "you@example.com",
        "legal_info_url": "https://stondy-vietsub-gpt.vercel.app/legal"
    }

    // Trả về dữ liệu dưới dạng JSON với định dạng mong muốn
    return res.status(200).json(aiPlugins);
}
