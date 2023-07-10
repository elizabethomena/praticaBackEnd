const http = require('http')

const json = JSON.stringify(objeto)
console.log(json)

const objeto = [
    { id: 1, sistOp: 'Windows_NT'},
    { id: 2, memDisp: '2506252288'},
    { id: 3, dir: 'Users 3F'}
]

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type','application/json')
})

server.listen()

