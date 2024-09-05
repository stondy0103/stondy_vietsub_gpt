// pages/api/openapi.js
export default function handler(req, res) {
    // JSON chứa định nghĩa OpenAPI
    const openApiDefinition = {
        "openapi": "3.1.0",
        "info": {
            "title": "Movie Vietsub API",
            "description": "API để lấy thông tin phim và tên nhân vật Việt hóa dựa trên slug. Không yêu cầu xác thực.",
            "version": "1.0.0"
        },
        "servers": [
            {
                "url": "https://stondy-vietsub-gpt.vercel.app"
            }
        ],
        "paths": {
            "/api/movies/{slug}": {
                "get": {
                    "summary": "Lấy tên Việt hóa cho một phim cụ thể dựa trên slug",
                    "description": "API này trả về thông tin về phim và tên nhân vật Việt hóa dựa trên slug của phim.",
                    "operationId": "getMovieVietsubBySlug",
                    "parameters": [
                        {
                            "name": "slug",
                            "in": "path",
                            "required": true,
                            "description": "Slug của phim",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Thông tin phim và tên Việt hóa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/MovieResponse"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Phim không tìm thấy hoặc không có thông tin về tên Việt hóa"
                        }
                    }
                }
            }
        },
        "components": {
            "schemas": {
                "MovieResponse": {
                    "type": "object",
                    "properties": {
                        "slug": {
                            "type": "string",
                            "description": "Slug của phim"
                        },
                        "title": {
                            "type": "string",
                            "description": "Tiêu đề của phim"
                        },
                        "genre": {
                            "type": "string",
                            "description": "Thể loại phim"
                        },
                        "description": {
                            "type": "string",
                            "description": "Mô tả phim"
                        },
                        "vietsub_names": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "origin_char_name": {
                                        "type": "string",
                                        "description": "Tên nhân vật gốc"
                                    },
                                    "vietsub_char_name": {
                                        "type": "string",
                                        "description": "Tên nhân vật Việt hóa"
                                    },
                                    "replace_char_vietsub_name": {
                                        "type": "string",
                                        "nullable": true,
                                        "description": "Tên thay thế cho tên Việt hóa"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    // Trả về JSON OpenAPI
    res.status(200).json(openApiDefinition);
}
