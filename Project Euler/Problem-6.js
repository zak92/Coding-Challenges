/*
Problem 6
Find the difference between the sum of the squares of the first one
 hundred natural numbers and the square of the sum.
 */

function sumSquareDifference(n){
	//mathematical formula for finding the sum of squares for n terms
	var sumOfSquares = n*(n + 1)*(2*n + 1)/ 6;
	//find the sum of the first n natural numbers 
	var sum = 0;
	for(var i = 1; i <= n; i++){
		  sum += i;
		}
	//square the result
	var squareOfSum = Math.pow(sum, 2);

	return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(100))