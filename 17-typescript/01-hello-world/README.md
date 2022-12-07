ref - https://www.typescriptlang.org/docs/handbook/2/basic-types.html

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


Update package.json file

```
npm set-script build "tsc" 
npm set-script start "node hello.js" 
```

Instead of `build` script, you can also use `prestart` - https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start


then create the `hello.ts` file. 


This generates *.js from each corresponding *.ts file:

```shell
npm run build
```
Note, in webstorm's file tree view, it shows each each js file nested under the ts file, for better readability. 

Now run the script:

```shell
npm start
```






```

Then create the `hello.ts` file with the content:

```shell

```

Then to run it, do:

```shell
npm start
```
