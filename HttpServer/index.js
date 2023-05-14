// using http module {inbuilt given by node } we can setup a basic server





const http = require('http')

const PORT=3000
const server = http.createServer(function exec(request,response) {
    response.end("Hello World")
    if (req.url = '/home') {
        response.end("Welcome to Home")
    }
})

server.listen(PORT, () => {
    console.log(`Server runnging on ${PORT}`)
});