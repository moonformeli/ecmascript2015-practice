/*

In ES6, you can simply initailize parameters in a function with a single line.
This will make your code much simpler and easier to read and understand.

Take a look at examples.

*/
function fn_es5(param1, param2){
	return (param1 ? param1 : 10) + (param2 ? param2 : 20);
}

function fn(param1 = 10, param2 = 20){
	return param1 + param2;
}

console.log(fn_es5(20,30)); // Print 50
console.log(fn_es5(20));	// Print 40
console.log(fn_es5());		// Print 30

console.log(fn(20,30)); // Print 50
console.log(fn(20)); 	// Print 40
console.log(fn()); 		// Print 30