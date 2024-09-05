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
            "/movies": {
                "get": {
                    "description": "Returns all pets from the system that the user has access to",
                    "responses": {
                        "200": {
                            "description": "A list of pets.",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/pet"
                                        }
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
