/*Given an array of integers, find the sum of its elements.*/
//Solution in JavaSript

function simpleArraySum(ar){
	var count = 0;
	for(var i = 0; i < ar.length; i++){
		count += ar[i];
	}
	return count;
}

var ar = [1, 2, 3, 4, 10, 11]
console.log(simpleArraySum(ar))
