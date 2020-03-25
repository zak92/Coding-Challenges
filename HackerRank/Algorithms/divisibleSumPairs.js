/*
You are given an array of
 n integers, a0,a1,..,an-1, and a positive integer,k. Find and print the number of (i,j)
 pairs where ii+aj is evenly divisible by K.
 */

function divisibleSumPairs(n, k, ar){
	var numPairs = 0;
	//constraints for n, k, ar[i]
	if(n >= 2 && n <= 100){
		if(k >= 1 && k <= 100){
			for(var i = 0; i < (n - 1); i++){
				if(ar[i] >= 1 && ar[i] <= 100){
					var j = 1;
					while(j <= n){
						//check if divisible by k and check
						//if i is less than j
						if((ar[i] + ar[j]) % k == 0 && i < j){
							//count the number of pairs that meet the above 
							//criteria
							numPairs++;
						}
						j++;
					}
				}
			}

		}
	}
	return numPairs;
}


var ar =  [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(6, 3, ar));
