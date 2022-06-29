"use strict"


/*

If an object is created using a class, then that object is a member of that class.

However an object-literal isn't created via a class.

However all objects created using the object-literal approach, by default inherits
all the properties (including methods sinces methods are a type of property) from a special builtin object called: "Object.prototype"

You can see what an object-literal inherits by running:

*/


console.log(Object.getOwnPropertyNames(Object.prototype))

// [
// 	'constructor',
// 	'__defineGetter__',
// 	'__defineSetter__',
// 	'hasOwnProperty',
// 	'__lookupGetter__',
// 	'__lookupSetter__',
// 	'isPrototypeOf',
// 	'propertyIsEnumerable',
// 	'toString',
// 	'valueOf',
// 	'__proto__',
// 	'toLocaleString'
// ]

// note, you can't view this above info by simply running:

// console.log(Object.prototype)

// That's because these properties have been set to non-enumerable. (see - https://stackoverflow.com/a/31173593)

// As a result, when we create an object using the object-literal approach:

let person = {
	firstName: "Peter",
	age: 18
}


console.log(person)

// We can then make use of the inherited properties, e.g. "hasOwnProperty":
console.log(person.hasOwnProperty("age")) // true
console.log(person.hasOwnProperty("lastname")) // false

// fyi about the hasOwnProperty method - // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty



// The Object.prototype is on the top of the prototype inheritance chain.
// That means Date objects, Array objects, and Person objects, all inherit from Object.prototype.



console.log(Object.getOwnPropertyNames(Date.prototype))
// [
// 	'constructor',        'toString',           'toDateString',
// 	'toTimeString',       'toISOString',        'toUTCString',
// 	'toGMTString',        'getDate',            'setDate',
// 	'getDay',             'getFullYear',        'setFullYear',
// 	'getHours',           'setHours',           'getMilliseconds',
// 	'setMilliseconds',    'getMinutes',         'setMinutes',
// 	'getMonth',           'setMonth',           'getSeconds',
// 	'setSeconds',         'getTime',            'setTime',
// 	'getTimezoneOffset',  'getUTCDate',         'setUTCDate',
// 	'getUTCDay',          'getUTCFullYear',     'setUTCFullYear',
// 	'getUTCHours',        'setUTCHours',        'getUTCMilliseconds',
// 	'setUTCMilliseconds', 'getUTCMinutes',      'setUTCMinutes',
// 	'getUTCMonth',        'setUTCMonth',        'getUTCSeconds',
// 	'setUTCSeconds',      'valueOf',            'getYear',
// 	'setYear',            'toJSON',             'toLocaleString',
// 	'toLocaleDateString', 'toLocaleTimeString'
//   ]
console.log(Object.getOwnPropertyNames(Array.prototype))
// [
// 	'length',      'constructor',    'concat',
// 	'copyWithin',  'fill',           'find',
// 	'findIndex',   'lastIndexOf',    'pop',
// 	'push',        'reverse',        'shift',
// 	'unshift',     'slice',          'sort',
// 	'splice',      'includes',       'indexOf',
// 	'join',        'keys',           'entries',
// 	'values',      'forEach',        'filter',
// 	'flat',        'flatMap',        'map',
// 	'every',       'some',           'reduce',
// 	'reduceRight', 'toLocaleString', 'toString'
//   ]


// An prototype's properties included all the properties that it itself inherit's from it's
// prototype, ..and so on. As a result an object can ultimately end up inheriting a lot of properties+methods.
