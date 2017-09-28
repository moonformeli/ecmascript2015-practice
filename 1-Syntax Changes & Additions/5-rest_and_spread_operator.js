/*

Spread operators are one of features added in ES6 that makes you to write codes easier and faster.
This feature can be used in various ways, such as for a parameters of a function, 
copying values into an array.

According to MDN, Spread syntax allows an iterable such as an array expression to be expanded in places
where zero or more arguments or elements are expected.

*/

/* 

When you want to copy something to an array or a value or something, you might have to
just assign it with ES5 to a new variable, like the line 23. In ES6, however,
you can use spread syntax to copy very efficiently with not having any concerns about
mutable/immutable status of variables.

*/

//Ex-1 Copying an array to an other array
var arr = [1,2,3];
var copy_arr = arr; // [1,2,3]
var copy_arr_spread = [ ...arr ]; // [1,2,3]

copy_arr_spread.push(4);
console.log(arr); // [1,2,3]
console.log(copy_arr_spread); // [1,2,3,4]

copy_arr.push(4);
console.log(arr); // [1,2,3,4]
console.log(copy_arr); // [1,2,3,4]

var arr2 = [1,2,3];
var arr3 = [4,5,6];
var new_arr = arr2.concat(arr3); // [1,2,3,4,5,6]
var new_arr2 = [ ...arr2, ...arr3 ]; // [1,2,3,4,5,6]

var obj1 = { 0:'hello', 1:'world', length:2 };
//var copy_obj1 = [...obj1]; // Uncaught TypeError
var copy_obj2 = Array.from(obj1); // 0:'hello', 1:'world', length:2
/* 
Only iterable objects can be used with Spread operator, since only iterable objects
have Symbol.iterator() inside which has next() method in which all the elements in an object
can be returned as a pair of key-value form, so they can allow you to use spread syntax.

For further information, have a look into 'Symbol' section in my github.
*/

//Ex-2 Sending parameters with Spread syntax
function fn(x,y,z){
    return x + y + z;
}

var arr = [1,2,3];

console.log(fn.apply(null, arr)); // Print 6
console.log(fn(...arr)); // Print 6
