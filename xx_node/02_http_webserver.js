// https://www.w3schools.com/nodejs/met_http_createserver.asp
// node thisfile.js
var http = require('http')

server = http.createServer(function (req, res) {
    console.log("request received on " + Date())
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello World!')
    res.end()
})

server.listen(8080)


// Then run:
// curl http://localhost:808
