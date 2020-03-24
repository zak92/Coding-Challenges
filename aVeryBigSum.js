function aVeryBigSum(ar) {
    var count = BigInt("0");
    for(var i = 0; i < ar.length; i++){
        count += BigInt(ar[i]);
    }
    return count;


}

var a;
var b;
 if (a>0 && a<200 && b>0 &&b<200){
 	console.log(a+b)
 }