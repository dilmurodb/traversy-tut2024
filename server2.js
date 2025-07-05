import { createServer } from 'http'

const PORT = process.env.PORT 

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

const server = createServer((req, res) => {
    if () {}
})

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});