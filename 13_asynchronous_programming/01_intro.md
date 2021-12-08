## A bit of background

"[V8](https://github.com/v8/v8)" is a "javascript engine", here is it's official [wiki](https://v8.dev/)

It is the thing that takes in javascript code and then executes it. There are a number of other javascript engines
also available, but v8 is the most popular one because that's the one that's used by:

- Google Chrome - this is a container for v8. It takes v8 and extends it so that it can run inside a browser. 
- Node.js - https://github.com/nodejs/node - Node.js is just another container for the v8 engine, and it extends v8 with extra nodejs specific functionality, to allow for server side operaations, such as reading+writing files on the filesystem and doing http requests (e.g. it's own alternative to curl). 
- [electronjs](https://www.electronjs.org/) - another container for v8. It extends v8 to allow it to be used for developing desktop applications, in javascript. Vs code itself is developed using electronjs. 


Javascript code can run slightly differently depending on which of the above containers is running the code. 








Need to understand the difference between:

1. asynchronous and synchronous
2. blocking and non-blocking. 








scripts, is bash scripts, runs code line be line. It waits for each line to completes
before moving on to the next line. So at any one time there is only one line of code 
being executed. This is called synchronous programming. 

Asynchronous programming is where one line of code runs, but successive lines can also be executed. this is called asynchronous programming. nodejs is asynchronous by default, i.e. the next line runs irrespective of whether the previous line has finished executing or not. So it can potentially mean multiple lines of code can be executiing simultaneously. 

V8 itself is synchronous, but node.js (and also chrome and electron) adds in the asynchronous capability. 


Asynchronous is better in terms of performance, i.e. it runs faster. But it's harder to write to
ensure it runs in a predictable way. 


synchrounous code is "blocking", i.e lines of code run, one-by-one in sequence, e.g in bash script. 

Asynchrounous node.js code is "non-blocking" by default. But can be written in such a way to run synchronously. 

"blocking" is something we invented to make code writing easier. Computer hardwaree on the other hand is optimised to run non-blocking code, i.e. hardware likes non-blocking code.

e.g. when hard drive receives instruction form cpu to read a file, the hard drive will copy the content into ram while cpu does other things, once copying is complete it sends a "hardware interrupt" to cpu, to resume with using that file. 

When hardware is running blocking-code based app, e.g. a bash script. As soon as app reaches waiting state (i.e. blocked), cpu moves the app from cpu's L1 cache, and put's it into hhd, until its ready to resume. And during that time the cpu searches for any other that's ready to resume and loads them into L1 cache and continues running them. So the cpu ends up doing a lot of context switching. Hence blocking code has bad performance.








Multi-process programming: application that spawns multiple processes. each process has access to it's own bit of private memory, that nothing else can access. These process can talk to either by means of things like sockets or ports. 

When a process is paused, the cpu moves the whole process and it's memory into the hdd. Then moves it back to cpu+ram when process is resume. This is very bad performance wise. 

Multi-threaded programming: A solution where a single processes spawns a collection of "sub-processes". These sub-procesess shares read+write access to the same bit of memory. These sub-processes are referred to as "threads". The code executed within each thread should be synchronous (blocking) code. This app only moves back and forth from hdd when all threads are in a paused state (blocked, waiting for something). Hence multi-threaded apps can stay in L1 cache for longer compared to single threaded apps, and consequenlty have better performance. 

One downside with using threads, is that they can cause race-condition like problems. One fix for this is to make use of "locks".

In general, writing multi-threaded code is hard. 


In Node, Node is multi-threaded by design. However your javascript code runs in a single thread (primary thread) and node uses the other threads for it's internal workings. Hence you don't have to worry about implementing things like "locks", since
all your code is running inside a single thread. 

v8 itself is single process by design (I think). It also isn't multi-threaded (I think). 


The `setTimeout(otherFunc, 3000)` statement is not part of v8, in fact it's one of things that node.js extends the core v8 with. The setTimeout statement actually requires more than one thread to run. 



## event driven programming

The `setTimeout(otherFunc, 3000)` executes in your primary thread, and node.js internally spawns a secondary thread (or it could even be a seperate process altogether), the primary thread doesn't wait for a response from the primary thread, it just carries on. All that the secondary thread does, is wait 3 seconds and then sends a response back to nodejs's event loop, which then get's added onto a queue. The response says "run function (otherFunc), which has code block of xxxx". So the next time your primary thread reviews the event loop's queue, it process those instructions. With this "events loop" setup, it means your primary thread wont wait for a response from the process. It will just continue as normal. Hence using the setTimeout() is non-blocking. Also the otherFunc also ends up getting executed in the primary thread. 

Hence setTimeout doesn't pause the primary thread. 


```
function cb() {
	console.log("hello 2")
}

console.log("hello 1")
setTimeout(cb, 3000)
console.log("hello 3")

```

Gives the output:

```
hello 1
hello 3
hello 2     // there's a 3 second pause before this line appears. 
```

The "otherFunc" is referred to as a "callback" function. A callback is a function passed as an argument to another function. So why does callback function exist? More about that next. 


## Callback functions

A callback is a function passed as an argument to another function.

Callback functions gives us a way to apply some degree of ordering while the overall app is still asynchronous. 

Here's another example, (taken from - https://nodejs.dev/learn/reading-files-with-nodejs)


```javascript
const fs = require('fs')

fs.readFile('/path/to/someFile.txt' , (err, data) => {
  // code block. 
  if (err) {
    console.error("Encountered the following error: ", err)
    return
  }
  console.log(data)
})
console.log("this line will run async (i.e it wont wait for the above fs.readFile to finish) and cant use content of path/to/someFile.txt.")
console.log("If this line needs content of path/to/someFile.txt, then you need to move this line inside the arrow function")
```

Here the callback function only get's added to the EventLoop's queue AFTER the /path/to/someFile.txt has been read and the values of "err" and "data" has been determined and stored in the (shared) memory, once the arrow function gets added to the EventLoop, the secondary thread exits out. The main thread then executes the arrow function the next time it reviews the queue. 

The key thing to keep in mind here is any code that needs to use the content of /path/to/someFile.txt must be executed
from inside the arrow function. 

Also notice how the callbacks are used to enforce some ordering, without resorting to blocking, i.e. the arrow function
doesn't get executed until at least after the values of "err" and "data" is known. 

On the otherhand, if you do want force code blocking then you can use `fs.readFileSync`:

```javascript
const fs = require('fs')

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}
```

This time, there's no sense in using a callback function, since we're doing things synchronously, and hence this is blocking code. Instead, we capture the result into the "data" constant. This easier to understand, but the performance is not as good. 


Also see:  https://nodejs.dev/learn/reading-files-with-nodejs

This fs.readFile() function has 2 input parameters:
	1. name of the file to read
	2. arrow function to run 

This fs.readFile() function creates a process (or internal nodejs thread), and the rest of your javascript
will continue to run, while this new process is running. This new process receives information about both input parameters, it then attempt to read the content of `/path/to/someFile.txt` and then responds back to our app's thread (via putting new entry in nodejs internal "event loop"), instructing it 
to run the function:

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

Another way to think of it, is that all that the spawned process does, is that it performs
the work it needs to do, to work out what the arguments needs to be to supply to the arrow function's input parameters. Then sends all that info back as an "event" entry to be added on the "events loop's" queue. The main thread then picks the event off the queue and executes it. 



