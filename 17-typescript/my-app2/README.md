Ref - https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness

https://www.typescriptlang.org/tsconfig#strict

Run:

```
tsc --init 
```

This creates the `tsconfig.json` file. 


Basic Data types:

- Boolean
- String
- Number (integers and floating numbers)
- Array
- Enum (This gives names to a finite set of numberic values)

Other less commonly supported data types:

- Void - used to represent the absence of a data type. Often used to indicate a function that doesn't return a value. 
- Null
- Undefined  
- Never - rarely used. 
- Any - This basically lets you store any data in a variable. This is a bit like disabling the benefits of typescript. So you should avoid using this data type. This is useful if you're using a third party library and can't gaurantee what type of data it's function returns back. 