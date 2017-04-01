// Takes a string and returns every letter's position in the alphabet.
// Non-alphabet characters and numbers are ignores.
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)



var alphabet = " abcdefghijklmnopqrstuvwxyz";
var tempString = "";

function alphabet_position(string) { 
	var letterPositionsString = "";
	var letterPositionsArray = [];
	var lowerCaseSentence = string.toLowerCase();                         
	var lowerCaseString = lowerCaseSentence.replace(/[\W_\d]/g, "");      
	if (lowerCaseString == ""){
		return "String must contain letters."
	}
	else { 
		for (var i = 0; i < lowerCaseString.length; i++) {                  
			tempString = lowerCaseString.charAt(i);  
			letterPositionsArray.push(alphabet.indexOf(tempString)); 
			letterPositionsString = letterPositionsArray.join(" "); 
		}
		return letterPositionsString;
	}	
}

//Test cases:
//"Nasa has discovered new Earth like planets." = "14 1 19 1 8 1 19 4 9 19 3 15 22 5 18 5 4 14 5 23 5 1 18 20 8 12 9 11 5 16 12 1 14 5 20 19"
//"  34123     " = "String must contain letters."
//"I've played guitar for 18 years." = "9 22 5 16 12 1 25 5 4 7 21 9 20 1 18 6 15 18 25 5 1 18 19"