'use strict'

// if you run `node --help`, you'll find that there is a "NODE_DEBUG" env var you can use. This let's you run the 
// script in debug mode, e.g.:


// NODE_DEBUG="http" node 09_NODE_DEBUG.js

// This will print out all debug info coming from the http module. 
// you can give this env a comma separated list of modules to debug. 



const http = require('http')


let server = http.createServer(function (req, res) {
	console.log("request received on " + Date())
	//console.log(req)
	//console.log(res)

	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.write('Hello World!')
	res.end("...and Goodbye")
})

server.listen(8080, () => { console.log("Server is now running...") })



// Then run:
// curl http://localhost:8080     // this will pass in the "req" input parameter. 
