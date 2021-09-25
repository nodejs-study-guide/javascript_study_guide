Quick way to try out if conditions:

```
$ node
Welcome to Node.js v15.8.0.
Type ".help" for more information.
> let i = 4
undefined
> i == 5
false
> i == 4
true
> i == "4"
true
> i === "4"
false
> .save examples.js
Session saved to: examples.js
> .exit
$
$ cat examples.js
let i = 4
i == 5
i == 4
i == "4"
i === "4"%
$
$
$ node
Welcome to Node.js v15.8.0.
Type ".help" for more information.
> .load examples.js
let i = 4
i == 5
i == 4
i == "4"
i === "4"
false
> i
4
> .exit
```


The node's -p flag is a handy way to run a single line of javascript code on the command line:

```
$ node -p "os.cpus().length"
12
```
