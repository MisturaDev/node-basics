const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
    res.writeHead (200, { "Content-Type": "text/plain" });
    res.end ("Welcome to the Home page");
    } else if (req.url === "/about") {
        res.writeHead (200, { "Content-Type": "text/plain" });
        res.end ("This is the About page");
    } else if (req.url === "/api") {
        res.writeHead (200,  {"Content-Type": "application/json"});
        res.end (JSON.stringify({message: "Hello from the API"}));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain"});
        res.end ("Page not found");
    }
    
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});