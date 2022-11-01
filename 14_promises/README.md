Side Notes:

a common use-case is that you use a npm package or tool that returns a promise.

E.g. - https://nodejs.dev/en/learn/reading-files-with-nodejs/



```javascript

function myReadFile() {
    const fs = require('fs/promises');

    let myPromise = fs.readFile('/Users/joe/test.txt', {encoding: 'utf8'});

    
    return myPromise
}

// The ".then" block will wait until the data the "myPromise" object is waiting for is becomes awailable, and then that data is actually gets passed into the "response" parameter. 
myReadFile.then(response => {
    console.data(response)
    }
)
```