//n is the last value in a sequence
//return the last number in the sequence that is divisible by a 
function isDivisible(a, n){
	for(var i = 0; i < a ; i++){
		if((n-1)%a == i){
			return (n-1)-i;
		}
	}
}


function sumMult(n, a1, a2){
	var d1 = isDivisible(a1, n)
	var d2 = isDivisible(a2, n)
	var d3 = isDivisible(15, n)
// the aritmetic formula for adding
// the terms of a sequence
	var x1 = ((a1+d1)/2)*d1/a1;
	var x2 = ((a2+d2)/2)*d2/a2;
	var x3 = ((15+d3)/2)*d3/15;

	if(n<15){
		return x1+x2;
	}
	return x1+x2-x3;

}

console.log(sumMult(1000, 3, 5))
