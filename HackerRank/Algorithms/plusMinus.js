function plusMinus(arr){
	//find the length of an array
	var n = arr.length;
	var countA = 0;
	var countB = 0;
	var countC = 0; 

	for(var i = 0; i < n; i++){
		if(arr[i] == 0){
			countA++;
		}
		else if(arr[i] >= -100 && arr[i] < 0 ){
			countB++;
		}
		else if(arr[i] > 0 && arr[i] <= 100){
			countC++;
		}
		
	}
	//toFixed(n), where n is the number of decimals in the float
	var a = (countA/n).toFixed(6);
	var b = (countB/n).toFixed(6);
	var c = (countC/n).toFixed(6);
/* 
Template literals are string literals allowing embedded expressions. You can use multi-line strings 
and string interpolation features with them.
Template literals are enclosed by the backtick (` `)  (grave accent) character instead of double or single quotes.
Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). 
*/
//print answers each on a new line
	console.log(
	`${c} 
	${b} 
	${a}`);

   
}

var arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr))