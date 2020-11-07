// example 1 - simple closure example


let greetings = (function() {
  let message = "hello";
  let getMessage = function() {
    return message;
  };
  return {
    getFinalMessage: getMessage,
  };
})();

console.log(greetings.getFinalMessage())


// example 2  - closure - variable gets stored inside function and get's updated. 
function setupCounter( val ){
  return function counter() {
    return val++;
  }
}


let counter0 = setupCounter(0);
console.log(counter0());  // 0
console.log(counter0());  // 1
let counter10 = setupCounter(10);
console.log(counter10());  // 10
console.log(counter10());  // 11
