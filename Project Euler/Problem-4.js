/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the
product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

//the input is an n digit number
function palindromeProduct(n){
	var arr = [];
	//upperbound - highest 3 digit number
	var upper = Math.pow(10, n) - 1;
	//lowerbound - lowest 3 digit number
	var lower = Math.pow(10, n - 1);

	for(var i = lower; i <= upper; i++){
		for(var j = lower; j <= upper; j++){
			var product = i * j;
	 		//reverse the product - i.e 14 becomes 41
			var revProduct = product.toString().split("").reverse().join("")
			revProduct = parseInt(revProduct);
			if(product == revProduct){
				arr.push(product);
			}

		}
	}
		//return the larget product in the array
		return Math.max(...arr);
	
}

console.log(palindromeProduct(3));

/*
The split() method divides a String into an ordered set of substrings, 
puts these substrings into an array, and returns the array.  - mdn
const str = "The quick brown fox"
str.split(" ") = ["The", "quick", "brown", "fox"]
str.split("") = ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x"]
str.split() = ["The quick brown fox"]
The reverse() method reverses an array in place. The first array element
becomes the last, and the last array element becomes the first. - mdn
The join() method creates and returns a new string by concatenating all of the elements in an array 
separated by commas or a specified separator string
x =["a", "b", "c"]
x.join() = "a,b,c"
x.join("") = "abc"
The parseInt() function parses a string argument and returns an integer - mdn
*/
