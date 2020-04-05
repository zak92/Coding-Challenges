/*
Problem 5
2520 is the smallest number that can be divided by each of the
numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all
of the numbers from 1 to 20?
*/
function divisibleUntilTwenty(){
	//let x be 20 since it is the smallest number evenly divisble by 20
	var x = 20;
	var i = 1;
	while(i <= 20){
		if(x % i != 0){
			//increment x by 10 since any number divisble by 20
			// must have the last digit to be zero
			x += 10;
			i = 1;
		}
		i++;
	}
	return x;
}

console.log(divisibleUntilTwenty())