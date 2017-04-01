//takes a string that is a sentence and returns an array with the shortest words in that string.


//removes numbers and extra spaces left for removal of numbers
function removeNumsAndSpaces(string) {
	var noNums = string.replace(/[\d.,]/g, ""); 
	var splitString = noNums.split(" ");
	for (var i = 0; i < splitString.length; i++) {
		if (splitString[i] === '') {
			splitString.splice(i, 1)[0];
		}
	}
	return splitString;
}


//gets length of each element of the array
function valueLength(array) {
	var lengthOfValues = [];
	for (var i = 0; i < array.length; i++) {
		lengthOfValues.push(array[i].length);
	}
	return lengthOfValues;
}


//creates array with indexex of the shortest words in the original string
function getIndexes(array, value) {
	var indexes = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] === value) {
			indexes.push(i);
		}
	}
	return indexes;
}


//creates an array of shortest words in original string
function getShortestWords(string, array) {
	var splitString = string.split(" ");
	var shortStrings = [];
	for (var i = 0; i < array.length; i++) {
		shortStrings.push(splitString[array[i]]);
	}
	return shortStrings;
}



function shortestSubStrings(string) {
	var trimString = string.trim();
	console.log(trimString);
	if (trimString === "") {
		return "String must contain letters."
	}
	else if (string.replace(/[\d]/g, "") === "") {
		return "String must contain letters.";
	}
	else { 
		var noPuncuation = trimString.replace(/[.!?,;""]/g, "");
		var strNoNums = removeNumsAndSpaces(noPuncuation);
		var arrayValueLen = valueLength(strNoNums);
		var min = Math.min(...arrayValueLen);
	 	var indexesOf = getIndexes(arrayValueLen, min); 
	 	var shortesStrings = getShortestWords(noPuncuation, indexesOf);
		return shortesStrings;
	}
}


//Test casese and what should return

// "I am a cat.";
// [ 'I', 'a' ]

// "I've played guitar for almost 19 years.";
// [ 'for' ]

// "Nasa has discoverd new Earth like planets.";
// [ 'has', 'new' ]


// numbers only:
// 123456;
// String must contain letters.


// empty string:
// "     ";
// String must contain letters.

