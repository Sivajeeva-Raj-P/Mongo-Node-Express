/*You are building a simple server for a college information website using Node.js.
Your goal is to create a basic server that:   Runs on port 8080.
When someone visits the home page (/), show this message:  "Welcome to ABC College!" (as plain text)
When someone visits the about page (/about), show:  <h1>About ABC College</h1> (as HTML content)
If they visit any other page like /random, it should:   Respond with 404 status code
Set the status message to "Not Found"      Send this plain message: "Page not found"
For every request, print the requested URL and method (GET or POST) to the terminal.  */
const http = require("http");

const server = http.createServer((req, res) => {

  
  console.log("Requested URL:", req.url);
  console.log("Method:", req.method);

  
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to ABC College!");
  }

  
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About ABC College</h1>");
  }

  
  else {
    res.statusCode = 404;             
    res.statusMessage = "Not Found";  
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});


server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
