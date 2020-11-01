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
