scripts, is bash scripts, runs code line be line. It waits for each line to completes
before moving on to the next line. So at any one time there is only one line of code 
being executed. This is called synchronous programming. 

Asynchronous programming is where one line of code runs, but successive lines can also be executed. this is called asynchronous programming. Javascript is asynchronous by default, i.e. the next line runs irrespective of whether the previous line has finished executing or not. So it can potentially mean multiple lines of code can be executiing simultaneously. 

Asynchronous is better in terms of performance, i.e. it runs faster. But it's harder to write to
ensure it runs in a predictable way. 


Multi-process programming: application that spawns multiple processes. each process has access to it's own bit of private memory, that nothing else can access. These process can talk to either by means of things like sockets or ports. 


Multi-threaded programming: A solution where a a collection of processes shares read+write access to the same bit of memory. These processes in this context are referred to as "threads". You can think of these threads as collecting acting like a single process. 


When a process is paused, the cpu moves the whole process and it's memory into the hdd. Then moves it back to cpu+ram when process is resume. This is very bad performance wise. 

However this back+forth movement doesn't happen with threads, unless all the threads in a collection have paused. 

One downside with using threads, is that they can cause race-condition like problems. One fix for this is to make use of "locks".

In general, writing multi-threaded code is hard. 


In Node, Node is multi-threaded by design. However your javascript code runs in a single thread and node used the other threads for it's internal workings. Hence you don't have to worry about implementing things like "locks"


## event driven programming

The `setTimeout(otherFunc, 3000)` line in a javascript code causes a new process (or thread) to be generated (aka triggers a new "event"). All this new process does, is wait 3 seconds and then sends a response back to your thread to run the "otherFunc" function. Your javascript's code, wont wait for a response. It will just continue as normal. Hence using the setTimeout() is non-blocking. 


```javascript
const fs = require('fs')

fs.readFile('/path/to/someFile.txt' , (err, data) => {
  // code block. 
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
```
Also see:  https://nodejs.dev/learn/reading-files-with-nodejs

This fs.readFile() function has 2 input parameters:
	1. name of the file to read
	2. arrow function to run 

This fs.readFile() function creates a  process (or internal nodejs thread), and the rest of your javascript
will continue to run, while this new process is running. This new process receives information about both input parameters, it then attempt to read the content of `/path/to/someFile.txt` and then responds back to our app's thread's, instructing it 
to run the function (these kinds of responses are refered to as "events", this in turn get's picked up by nodejs's internal event loop):

```javascript
(err, data) => {
  // code block. 
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
}
```

This process will also supply the values to run for "err" and "data" parameters. Our main thread will then execute this arrow function, using the supplied values. 

Another way to think of it, is that all that the spawned process does, is that it, it performs
the work it needs to do to work out what the arguments needs to be to supply to the arrow function's input parameters. 



