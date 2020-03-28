/*
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
//Solution 1
function largestPrimeDivisor(n){
	//smallest prime is 2
	var primeDivisor = 2;
	while(n > 1){
		if(n % primeDivisor == 0){
			n /= primeDivisor;
		}
		else{
			primeDivisor++;
		}
	}
	return primeDivisor;
}

console.log(largestPrimeDivisor(600851475143))


/*
Solution 2:
the function below also solves the highest prime factor BUT it can
only handle at most a 9 digit number
*/
function largestPrimeFactor(n){
	var primes = [];
	for(var i = 2; i <=n; i++){
		//if i is a divisor and is prime, then push it into an array
		if (n % i == 0){
			if(isPrime(i)){
				primes.push(i)
			}
		}
	}
	//find the largest value in the array
	return Math.max(...primes);
}

//Checks if a number is prime
function isPrime(p){
	for(var i = 2; i < p; i++){
		if(p % i == 0){
			return false;
		}
	}
	return true;
}

console.log(largestPrimeFactor(13195));
