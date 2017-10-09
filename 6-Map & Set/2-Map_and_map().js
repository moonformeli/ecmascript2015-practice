/*

In JavaScript, there's a built-in method, Array.prototype.map(), which allows you to
loop over an interable object.

*/

var arr = [1,2,3];
arr.map((data) => console.log(data)); // 1 2 3

var newMap = new Map([
	['key1', 'value1'],
	['key2', 'value2'],
	['key3', 'value3']
]);
newMap.map((k,v) => console.log(k,v)); // Uncaught TypeError
/*
Even though there's Symbol.iterator() method in Map Object, it prints an error when you try
to work with Map Object on map(). It's because map() function only deals with an array object.
So, in order to make it, you need to convert an Map Object to an array object.
There is a very simple way to make it.
*/

var iter = [...newMap];
iter.map((data) => console.log(data));
// (2) ["key1", "value1"]
// (2) ["key2", "value2"]
// (2) ["key3", "value3"]