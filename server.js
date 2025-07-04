import http from 'http'
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.write('Hello World! This is cool!')
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end('<h1>Hello people</h1>');
})

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})