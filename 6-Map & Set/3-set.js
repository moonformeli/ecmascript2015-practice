/*

The difference of Set and Map is, while Map takes a data which really exists in the list by
overwritting, Set does not. If there's a same key in the list, that data will be skipped.

*/

var setObj = new Set();
var newSet = new Set([1, 1, 2, 2, 3, 3]);
var newSet2 = new Set().add(1).add(1).add(2).add(2).add(3).add(3);

for(let x of newSet) console.log(x); // 1 2 3