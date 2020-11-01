// example 1

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


// example 2  - variable gets stored inside function and get's updated. 
function setupCounter( val ){
  return function counter() {
    return val++;
  }
}


let counter0 = setupCounter(0);
console.log(counter0());
console.log(counter0());
let counter10 = setupCounter(10);
console.log(counter10());
console.log(counter10());
