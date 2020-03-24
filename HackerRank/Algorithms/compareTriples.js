function compareTriplets(a, b) {
	var bobPoint = 0;
	var alicePoint = 0;
	var pointsArr =[];

	for(var i = 0; i < 3; i++){
		if(a[i] < b[i]){
			bobPoint += 1;
		}
		else if (a[i] == b[i]){
			bobPoint +=0;
			alicePoint += 0;
		}
		else {
			alicePoint += 1;
		}
	}

	pointsArr.push(alicePoint);
	pointsArr.push(bobPoint);
	return pointsArr;
}

var a = [5, 6, 7]
var b = [3, 6, 10]

console.log(compareTriplets(a, b))


