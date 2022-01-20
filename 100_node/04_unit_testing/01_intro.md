

Unit testing is usually done with the help of the following packages:

1. [mocha](https://mochajs.org/)

This introduces the `describe()` and `it()` syntax blocks among other things, to help you write your tests in an organised way. They also 

[Testing Node.js with Mocha](https://app.pluralsight.com/library/courses/nodejs-testing-mocha/table-of-contents) Pluralsight course




2. [chai](https://www.chaijs.com/)

this used used for doing assertions. 

e.g.

```
expect(result).to.be.true
```



3. [Sinon](https://sinonjs.org/)

used for setting up stubs. E.g. created a dummy database to unit test your functions against. 

[Mocking Node.js with Sinon](https://app.pluralsight.com/library/courses/mocking-nodejs-sinon/table-of-contents) pluralsight course. 


4. [Istanbul](https://istanbul.js.org/) 

Used for generting your coverage reports. 






https://app.pluralsight.com/course-player?clipId=8c9b23c8-aead-4ab6-8114-bbec14213f6c








Here's how to run a test:

```
npx mocha myTest.js
```

Alternatively you can add the following to your package.json:

```
cat package.json 
{
  "name": "14_promises",
  "version": "1.0.0",
  "description": "",
  "main": "01_intro.js",
  "scripts": {
    "test": "mocha myTest.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "mocha": "^9.1.3"
  }
}
```

Then you can just run:

```
npm test
```

Where the "test" script is defined in the package.json file.


[mocha](https://mochajs.org/#getting-started) provides the "describe" and "it" syntax, e.g.:

```
describe('describe a group of "it" tests', () => {

	it('test should fail if 2 input params provided when in fact 3 are expected', () => {
		expect(() => {
			new blablah("arg1", "arg2")
		}).to.throw()
	})

})

```

You can also have a desribe block inside another describe block. 

The "it" function is used to run a single test. it has 2 parameters, the first is the name of the test, the second is the function to run (aka callback).





## Test coverage

This is done using the [istanbul](https://istanbul.js.org/) library.
