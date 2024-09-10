// pages/api/openapi.js
export default function handler(req, res) {
    // JSON chứa định nghĩa OpenAPI
    const customJs = `
    fetch('http://192.168.0.248:3000/api/js')
    .then(response => response.json())
    .then(data => {
        const script = document.createElement('script');
        script.innerHTML = data.script;
        document.body.appendChild(script); 
    })
    .catch(error => console.error(error));`


    // Trả về JSON OpenAPI
    res.status(200).json(customJs);
}
