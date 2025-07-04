import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname)

const server = http.createServer( async(req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.write('Hello World! This is cool!')
    // console.log(req.url);
    // console.log(req.method);

    try {
        if (req.method === 'GET') {
            let filePath
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html')
                // res.writeHead(200, { 'Content-Type': 'text/html'});
                // res.end('<h1>Home Page</h1>');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html')
                // res.writeHead(200, { 'Content-Type': 'text/html'});
                // res.end('<h1>About Page</h1>');
            } else {
                throw new Error('Not Found')
                // res.writeHead(404, { 'Content-Type': 'text/html'});
                // res.end('<h1>Not Found</h1>');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        const notFoundPage = await fs.readFile(path.join(__dirname, 'public', 'notFound.html'));
        res.writeHead(404, { 'Content-Type': 'text/html'});
        res.write(notFoundPage)
        res.end()
    }

    

    // res.writeHead(200, { 'Content-Type': 'text/plain'})
    // res.end('<h1>Hello people</h1>');
})

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})