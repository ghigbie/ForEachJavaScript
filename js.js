
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
		func(array[i]); //this calls this funuction, a generic function for each item of an array
	}
}

myForEach(colors, alert);

myForEach(colors, function(color){
	console.log(color);
});

Array.prototype.myForEach = function(func){
	//we have to use this.length here
	for(var i = 0; i < this.length; i++){
		func(this[i]);
	}
}

var friends = ["Charlie", "Dave", "Caitlin"];

friends.myForEach(alert);

friends.myForEach(function(name){
	console.log(`I love ${name}`);
});