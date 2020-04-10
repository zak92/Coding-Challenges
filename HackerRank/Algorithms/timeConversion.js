//Time Conversion
//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.


//input must be in the format hh:mm:ss_M

function timeConversion(s){

	var timeStr = s.split("");
	timeStr.splice(8, 2); //remove AM or PM
	var timeHours;

	//if the input is 12:00:00AM
	if(s.search("12") == 0 && s.includes("AM")){
			
		    timeHours = timeStr.splice(0, 2);
		    //replace the hh with 00
			timeStr.unshift("00");
	}

	//if input is between 1PM and 11PM
	if(s.includes("PM") && s.search("12") != 0){
			//take hh and covert it to an integer
			timeHours = timeStr.splice(0, 2).join("");
			timeHours = parseInt(timeHours);
			//convert hh to military time
			timeHours = 12 + timeHours;
			timeStr.unshift(timeHours)
	}

	return timeStr.join("");

}

var time = "01:00:00PM"
console.log(timeConversion(time));