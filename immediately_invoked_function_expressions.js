// A regular function
// see - https://app.pluralsight.com/course-player?clipId=afbe84cd-c227-4222-b54b-7c15d49e1ada

function greeting() {
  console.log('Hello')
}

greeting() // Hello




// IIFE - immediately invoked function expression
// IIFE equivalent of the above 
(function greeting() {
  console.log('Hello')
})()

// also see closures
