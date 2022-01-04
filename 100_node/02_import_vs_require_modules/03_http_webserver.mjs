'use strict'

// This is similar to the last example, but rather than importing the whole library, this time we're just 
// importing a particular method from the library. This technique is called "named imports". 
// The syntax is similar to destructuring sy
import {createServer} from 'http' 


// Also need to replace "http.createServer" to just "createServer"
let server = createServer(function (req, res) {
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
