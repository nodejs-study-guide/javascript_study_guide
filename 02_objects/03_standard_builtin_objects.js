'use strict'

// As a reminder, here's a couple of examples of user defined objects.
let message = "hello";
function Greetings(name) {
  return "Hello " + name
}



// The "message" object only exist because I declared it above.
// Similarly the "Greetings" object only exists because I defined it.
// However the javascript runtime comes with a collection of objects already builtin in.
// I.e. they exist without me needing to define/declare
// them upfront. You can find them here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


// java script automatically generates "global object" just before it executes your code. The property of this
// global object stores:

// 1. Global constants, e.g. "Infinity"
// 2. Global functions, e.g. isNan()
// 3. Constructor functions, e.g String()
// 4. Global objects, e.g. "Math"


// This global object is called:
// - "Window" in web browser environments
// - "global" in node.js environments.

// Note, having a different name for the global-object can cause inconvenience. That's why in 2020
// the new alias "globalThis" was introduced which works in both web browsers and node.js.


// however you won't see all these properties by running:

console.log(global)
console.log(globalThis)


// Thats because the global object's properties are set to non-enumerable (see - https://stackoverflow.com/a/31173593)

// So as a workaround, you can view them like this instead:

console.log(Object.getOwnPropertyNames(global))

// This outputs:

// [
//   'Object',             'Function',       'Array',
//   'Number',             'parseFloat',     'parseInt',
//   'Infinity',           'NaN',            'undefined',
//   'Boolean',            'String',         'Symbol',
//   'Date',               'Promise',        'RegExp',
//   'Error',              'EvalError',      'RangeError',
//   'ReferenceError',     'SyntaxError',    'TypeError',
//   'URIError',           'globalThis',     'JSON',
//   'Math',               'console',        'Intl',
//   'ArrayBuffer',        'Uint8Array',     'Int8Array',
//   'Uint16Array',        'Int16Array',     'Uint32Array',
//   'Int32Array',         'Float32Array',   'Float64Array',
//   'Uint8ClampedArray',  'BigUint64Array', 'BigInt64Array',
//   'DataView',           'Map',            'BigInt',
//   'Set',                'WeakMap',        'WeakSet',
//   'Proxy',              'Reflect',        'decodeURI',
//   'decodeURIComponent', 'encodeURI',      'encodeURIComponent',
//   'escape',             'unescape',       'eval',
//   'isFinite',           'isNaN',          'global',
//   'process',            'Buffer',         'URL',
//   'URLSearchParams',    'TextEncoder',    'TextDecoder',
//   'AbortController',    'AbortSignal',    'EventTarget',
//   'Event',              'MessageChannel', 'MessagePort',
//   'MessageEvent',       'clearInterval',  'clearTimeout',
//   'setInterval',        'setTimeout',     'queueMicrotask',
//   'clearImmediate',     'setImmediate',   'SharedArrayBuffer',
//   'Atomics',            'AggregateError', 'FinalizationRegistry',
//   'WeakRef',            'WebAssembly'
// ]

// After creating this global-object, javascript then creates global level variables for each of these
// properties, which are named after the property's name, that means instead of:

console.log(global.Math.sqrt(9))

// you can just do:

console.log(Math.sqrt(9))



// as mentioned earlier, the global-object's properties are used for storing:

// 1. Global constants, e.g. "Infinity"
// 2. Global functions, e.g. isNan()
// 3. Constructor functions, e.g String()
// 4. Global objects, e.g. "Math"



// e.g the "Math" object:

console.log(typeof Math)     // object


// here we're accessing one of Math object's property
console.log(Math.PI)         // 3.141

// here we're accessing one of it's methods
console.log(Math.sqrt(16))   // 4





// Here are example of constructor functions, e.g. "Date"
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log(typeof Date)  // function

console.log(typeof Number)   // function      - Note the builtin object "Number" is not the same thing as the data type, "number"



// you can call some special methods called "static methods" directly on this builtin function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#static_methods

console.log(Date())  // Fri Nov 19 2021 16:06:48 GMT+0000 (Greenwich Mean Time)
console.log(Date.now())  // 1612720322842


// However to use the 'protoytpe' functions you have to create a "Date" object and apply the function to that object
let y = new Date()

// I think the "new" indicates that this is a constructor function - https://github.com/Sher-Chowdhury/javascript_study_guide/blob/main/constructor_functions.js

console.log(typeof y)    // object

console.log(y.toDateString()) // Sun Feb 07 2021


// You can think of a builtin object's properties and methods as a set of general purpose properties and methods
