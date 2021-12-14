'use strict'

// https://www.w3schools.com/nodejs/met_http_createserver.asp
// node thisfile.js
const http = require('http')    // here we're using "require" to pull in the "http" built-in library. 
                                // "require" is also used for pulling in 3rd party libraries too. 
                                // The builtin "require" function is used to load in dependant 
                                // builtin and 3rd party libraries. In this example it's loading in the builtin "http" module. To see a full list of the builtin modules, just go to node-repl and hit tab+tab.
                                // Note: this "http" library only exists in nodejs. It doesn't exist in ordinary javascript.

// Whenever you see the "require" statement in a script, is an indicates that this script uses the "CommonJS" module managment 
// system. Hence a js file that contains "require" keyword, are referred to as a CommonoJS module. 

// Node also supports the "ECMAScript" module management. There are 2 ways to support that:
// - name the file with ".mjs" extension (see next file)
// - or set the whole module to use ECMAScript system. (covered later)


let server = http.createServer(function (req, res) {
    console.log("request received on " + Date())
    console.log(req)
    console.log(res)

    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello World!')
    res.end("...and Goodbye")     // this does the write, and then ends the connection. 
})

// this activetes the web server. I think it has an internal "setInterval" that causes it to listen. 
server.listen(8080, () => {console.log("Server is now running...")})   

// Note, that the second callback is optional, the following would also work:
// server.listen(8080)                                                                    


// Then run:
// curl http://localhost:8080     // this will pass in the "req" input parameter. 
