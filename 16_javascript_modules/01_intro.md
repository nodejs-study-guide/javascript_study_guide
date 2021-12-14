I DON'T THINK YOU NEED TO KNOW THIS FOR NODEJS

modules are designed to be:

1 module per file. 
2. exporting syntax is:

```
function myPrivateFunction(){
	console.log("goodbye world)
}


export function myPublicFunction(){
	console.log("hello world")
	myPrivateFunction()
}
```