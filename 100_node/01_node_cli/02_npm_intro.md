npm is short for "Node Package Manager", public third party pacakges are hosted on - https://www.npmjs.com/

Anyone can publish anything on https://www.npmjs.com

npm is now used for all javascript code, not just node, e.g. it hosts packages for use in front end development.  

## What is a package?

The name "package" is what npm uses to label the bits of reusable code. 

A "Node package" (aka module) is basically a **folder** that contains .js files. So any folder that contains javascript code is called a package (or module). 


## the npm cli

the npm cli get's installed as part of node itself, so you don't have to install it seperately. 



the npm command can run "scripts" defined in the package.json.

each if a script is called, "test", then you run:

```
npm run test
```

the name "test" is actually a commonly used name, so common in fact that npm provides the following shorthand aliases:

```
npm test

# or 

npm t
```

