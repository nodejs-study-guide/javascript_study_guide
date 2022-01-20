So far we have seen that callbacks are used as what to run "next". 

however another way that callbacks are often used, is an indicator that causes the parent code to wait until the child function finishes running. 


Meaning that a parent code can pass in a callback into another function (that accepts a callback). And the parent function simply waits until the child function triggers the callback, before continuing.  Here's an example:

- https://mochajs.org/#asynchronous-code


```javascript
describe('#save()', function() {
  it('should save without error', function(done) {
    let user = new User('Luna')
    user.save(function(err) {
      if (err) done(err)
      else done()
    })
  })
})
```

Here we have quite a few nesting of callbacks. 

1. describe-function passes in a callback, which contains the it-function to execute. 
2. it-function passes in a callback. This callback has an input parameter called "done". This "done" is used for passing in another callback function. 
3. this user.save method accepts a callback
4. the save function executes it's own save-based-code, and then at the end executes the passed-in callback. If the save-method encounters an error (e.g. in a try-catch block), then it runs the passed-in callback with an err value for it's input parameter, otherwise it runs with a null input parameter.  
5. the passed-in callback contains the call to done() callback, 


The function definition of the "done" callback is not known, all we know is that as soon as it get's executed, it signals to the it-block that the test has ended. Also if the done() is called with an error argument, then it tells the it-block to report the test as a fail, otherwise record it as a pass. 


the "done" callback only executes AFTER the method under test (user.save) exits,

As you can see, we don't know the content of the "done" callback function, all we know is that it's part of mocha's built in mechanism to tell it whether a particular test has ended, and also whether to record the test as a fail (caused by function under-test throwing an exception). 

For some examples, see:

- https://github.com/Sher-Chowdhury/mocha_demo/tree/testing-async-code
- https://github.com/Sher-Chowdhury/mocha_demo/tree/testing-async-code1


Here we can think of the "done" callback as mocha's internal mechanism, and we don't need to know what lines of code are executed by this callback. All we have to do is ensure that it does get called exactly once. 


here's another example - http://caolan.github.io/async/v3/docs.html#each

```javascript

const deleteFile = function(file, internalCallback) {
    fs.unlink(file, internalCallback);
};

async.each(fileList, deleteFile, function(err) {
    if( err ) {
        console.log(err)
    } else {
        console.log('All files have been deleted successfully')
    }
})
```

async.each accepts 3 input parameters, where the 2nd and 3rd parameters are callbacks. 
This time, the second parameter, has to be a callback where the callback's last input parameter must be a callback (internalCallback). The async needs this internalCallback as it's own internal indicator for it determina when the deleteFile function has ended. Once again we'll have a try-catch block inside the 
fs.unlink function, which will either call internalCallback() or internalCallback(err), depending on whether it ended successfully. So this again is a similar pattern to the mocha example. 

So if fileList is a 5 item list, then deleteFile get's run 5 times, or less if an error is encountered. Once deletefile has finished run however many times, the last callback (3rd input parameter) is called with error value (if any) from the deleteFile callback function. 


another example is the nodejs express library. 