/*
Print contents of an array in reverse order
*/
function reverseArray(a){
	var revOrder = [];

	if(a.length >= 1 && a.length <= 1000){
		for(var i = a.length; i >= 0; i--){

			if(a[i] >= 1 && a[i] <= 10000){
				revOrder.push(a[i]);
			}
		}
	}
	return revOrder;
	
};

console.log(reverseArray([1, 4, 3, 2]));
