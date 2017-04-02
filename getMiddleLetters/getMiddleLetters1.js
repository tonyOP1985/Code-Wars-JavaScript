//takes a string and returns middle letters



function getMiddleLetter (string) {
	var aString = string.toString();  //just in case numbers are passed in
	if (aString.length === 0) {
		return "Please enter a word."
	}
	else if (aString.length === 2) {
		return aString;
	}
	else {
		var halfstrlen = Math.floor(aString.length / 2); 
		var midLetters = "";
		var i;
		for (i = 0; i < halfstrlen; i++) {
			if (aString.length % 2 === 0) {            // if string.length is even
				midLetters = aString.slice(halfstrlen - 1, halfstrlen + 1);   // slices out two middle letters
				return midLetters;
			}
			else {  //if string.length is odd
				midLetters = aString.slice(halfstrlen, halfstrlen + 1);    // slices out single middle letter
				return midLetters;
			}
		}
	}	
}

