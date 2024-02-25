ref - https://www.typescriptlang.org/docs/handbook/2/basic-types.html
- https://www.pluralsight.com/courses/typescript-5-fundamentals

```shell
node --version
v18.10.0

npm init -y
npm install typescript
```



```shell
npx tsc --help // shows help info
npx tsc --init // this creates the tsconfig.json file
```

Note: the `npx` means using the `tsc` binary from inside the `node_modules` folder


Update package.json file by running:

```
npm set-script build "tsc" 
npm set-script start "node hello.js" 
```
Note: `set-script` is now deprecated, instead use - https://docs.npmjs.com/cli/v8/commands/npm-pkg
or just edit the package.json file directly. 


Instead of `build` script, you can also use `prestart` - https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start

This `hello.js` file doesn't exist yet. Instead we'll create a `hello.ts` file and then run `npm build`. Typescript will then generate the `hello.js` using the content from `hello.ts`


Then create the `hello.ts` file:

```typescript
// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: string) {
    console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", "monday");
```




This generates *.js from each corresponding *.ts file:

```shell
npm run build
```


Now run the script:

```shell
npm start
```

If you want to update+build+run just one .ts file, then you can do:

```
vim hello.ts
npx tsc hello.ts
node hello.js
```



