console.log("EXAMPLE A")
// get's an item's index number based on it's value. 

let listA = [ "a", "b", "c", "d", "c", "f" ]

console.log(listA.indexOf("c"))  // 2    // but only the first match. 

console.log(listA.indexOf("z"))  // -1  // meaning no match found. 





console.log("EXAMPLE B")
// here's how to search through an array, and return an array with all the matches found. 


ListB = [ "a", "b", "c", "d", "c", "f" ]

// each list item is passed into the function via the "item" input parameter. 
listOfSearchResults = ListB.filter(
	function(item){
		if (item === "c") {
			return item
		}
	}
)

console.log(listOfSearchResults)   // [ 'c', 'c' ]



console.log("EXAMPLE C")
// You can replace "filter" with "find", if you just want to get the first match. 


ListC = [ "a", "b", "c", "d", "c", "f" ]

// each list item is passed into the function via the "item" input parameter. 
// find method exits as soon as th first match is found. 
SearchResultC = ListC.find(
	function(item){
		if (item === "c") {
			return item
		}
	}
)

console.log(SearchResultC)   // c



console.log("EXAMPLE D")
// foreach loop

// here's how to search through an array, and return an array with all the matches found. 


ListD = [ "a", "b", "c", "d", "c", "f" ]

// each list item is passed into the function via the "item" input parameter. 
ListD.forEach(
	function(item){
		console.log(item)
	}
)
