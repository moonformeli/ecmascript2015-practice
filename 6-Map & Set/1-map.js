/*

Map is an object to create an interable object. It requires key and value as a pair of set,
there're 2 ways to create an object using Map.

If there's the same key as the input data, the value will be overwritten.

*/

var emptyMap = new Map();
var newMap = new Map([
	['key1', 'value1'],
	['key2', 'value2'],
	['key1', 'sports']
]);
var newMap2 = new Map().set('key1', 'value1').set('key2', 'value2');

/* Same key but different values, then the latter value will be stored. */
for(let x of newMap) console.log(x); // ['key1', 'sports'], ['key2', 'value2']

/* To obtain a certain data, you can use get() method. */
var newMap3 = new Map([
	['one', 100], 
	['two', 200],
	['three', 300]
]);

var [one, two] = [newMap3.get('one'), newMap3.get('two')];
console.log(one, two); // 100 200