//generates an array of the fibonacci sequence
function fib(n){
	var arr = [];
	arr.push(1);
	arr.push(2);

	for(var i = 2; i < n; i++){
		arr.push(arr[i-2] + arr[i - 1]);
	}
	return arr;
}

console.log(fib(32))
//finds the sum of even numbers
function sum(a){
	var sum = 0;
	for(var i = 0; i < a.length; i++){
		//terms in the sequence must be even and not exceed 4 000 000
		if(a[i] % 2 == 0 && a[i] < 4000000){
			sum+= a[i];
		}
	}
	return sum;
}

var n = 50
console.log(sum(fib(n)))