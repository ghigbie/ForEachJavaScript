
//created file in terminal

var colors = ["red", "orange", "yellow", "green", "blue"];

colors.forEach(function(color){
	console.log(color);
});

var nums = [45, 65, 77, 34];

function myForEach(array, func){
	//loop through array and call func for each item in the array
	for(var i = 0; i < array.length; i++){
		//call func() for each item in array
		func();
	}
}