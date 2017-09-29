/*

Beside 'yield', there's another one named 'yield*' which can loop over an iterable object.
Take a look at the example.

*/

// yield* [1,2,3] equals 
// yield 1; yield 2; yield 3;
// Since [1,2,3], an Array object, is an iterable, yield* can loop it over
var gen = function*(){
	yield* [1,2,3];
}();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: undefined, done: true}

var iter = function*(){
	yield* 'hi';
}();
var gen2 = function*(){
	yield* iter;
}();

console.log(gen2.next()); // {value: "h", done: false}
console.log(gen2.next()); // {value: "i", done: false}
console.log(gen2.next()); // {value: undefined, done: true}