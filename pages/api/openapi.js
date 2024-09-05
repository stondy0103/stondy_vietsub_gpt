// pages/api/openapi.js
export default function handler(req, res) {
    // JSON chứa định nghĩa OpenAPI
    const openApiDefinition = {
        openapi: "3.0.0",
        info: {
            title: "Movie Vietsub API",
            version: "1.0.0",
            description: "API để lấy thông tin phim và tên nhân vật Việt hóa dựa trên slug."
        },
        servers: [
            {
                url: "https://stondy-vietsub-gpt.vercel.app/api/openapi"
            }
        ],
        paths: {
            "/api/movies/{slug}": {
                get: {
                    summary: "Lấy tên Việt hóa cho một phim cụ thể dựa trên slug",
                    parameters: [
                        {
                            name: "slug",
                            in: "path",
                            required: true,
                            description: "Slug của phim",
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Phản hồi thành công",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            slug: { type: "string" },
                                            title: { type: "string" },
                                            genre: { type: "string" },
                                            description: { type: "string" },
                                            vietsub_names: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        origin_char_name: { type: "string" },
                                                        vietsub_char_name: { type: "string" },
                                                        replace_char_vietsub_name: { type: "string", nullable: true }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            description: "Phim không tìm thấy hoặc không có tên Việt hóa"
                        }
                    }
                }
            }
        }
    };

    // Trả về JSON OpenAPI
    res.status(200).json(openApiDefinition);
}
