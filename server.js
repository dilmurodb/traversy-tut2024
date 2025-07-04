import http from 'http'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname)

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.write('Hello World! This is cool!')
    // console.log(req.url);
    // console.log(req.method);

    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('<h1>About Page</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html'});
        res.end('<h1>Not Found</h1>');
    }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain'});
        res.end('Server Error')
    }

    

    // res.writeHead(200, { 'Content-Type': 'text/plain'})
    // res.end('<h1>Hello people</h1>');
})

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})