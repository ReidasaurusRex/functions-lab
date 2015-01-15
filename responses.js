responses.js

// Problem 1
function maxOfTwoNumbers(x,y) {
    if x > y {
        return x;
    }
    else if y > x {
        return y;
    }
    else {
     return "equal"   
    }
}

//Problem 2
function maxOfThree(x,y,z) {
    if ((x > y) && (x > z)) {
        return x;
    }
    else if ((y > x) && (y > z)) {
        return y;
    }
    else if ((z > x) && (z > y)) {
        return z;
    }
    else {
        return "No greatest"
    }
}

//Problem 3
function vowelCheck(letter) {
    if ((letter.length == 1) && (typeof letter == "string")) {
        if ((letter.toLowerCase() == "a") || (letter.toLowerCase() == "e") || (letter.toLowerCase() == "i") || (letter.toLowerCase() == "o") || (letter.toLowerCase() == "u") || (letter.toLowerCase() == "y")) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "improper entry"
    }
};

//Problem 4
// ? Couldn't get to work. Thought to do something like: 
	function sumArray(x) {
		var count = 0;
		for (var i = 0; i < x.length; i++) {
			count = count + x[i];
		}
	}



	function prodArray(y) {
		var prod = 1;
		for (var i = 0; i < y.length; i++) {
			prod = prod * x[i];
		}
	}