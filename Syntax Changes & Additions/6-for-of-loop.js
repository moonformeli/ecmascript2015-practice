/*

for-of loop allows you to loop an every iterable object, such as Map, Set, String, TypedArray, arguments and Array.
This is a really simple and easy but powerful functionality, but there is one thing you need to make sure,
is to make sure to check whether Symbole.iterator() belongs to an object that is enmerable.
If there's no, then the object must be ended up being converted to an interable object by using Array.from method.

*/

var iterable = [1,2,3];
for(let value of iterable){
    console.log(value); // Print 1 2 3
}

var str = 'hello';
for(let value of str){
    console.log(value); // Print 'h' 'e' 'l' 'l' 'o'
}

var map = new Map().set('a', 1).set('b', 2).set('c', 3);
        //new Map([['a', 1], ['b', 2], ['c', 3]]);
for(let value of map){
    console.log(value); // Print ['a', 1] ['b', 2] ['c', 3]
}
for(let [k,v] of map){
    console.log(k,v); // Print a 1, b 2, c 3
}

var set = new Set().add(1).add(1).add(2).add(2).add(3).add(3);
        //new Set([1, 1, 2, 2, 3, 3]);
for(let value of set){
    console.log(value); // Print 1 2 3
}