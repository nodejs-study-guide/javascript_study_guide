'use strict'

// This is the same example as before, but this time we're using "ECMAScript" module management instead of commonJS. 
// i.e we're using the "import" keyword rather than the "require" keyword. Also using the ".mjs" file extension. 
import http from 'http' 



let server = http.createServer(function (req, res) {
    console.log("request received on " + Date())
    console.log(req)
    console.log(res)

    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello World!')
    res.end("...and Goodbye")
})

server.listen(8080, () => {console.log("Server is now running...")})   
                                                            

// Then run:
// curl http://localhost:8080     // this will pass in the "req" input parameter. 
