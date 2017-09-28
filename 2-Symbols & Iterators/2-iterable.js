/*

There are 2 concepts on 'Iterator' you have to understand before jump into the coding world.

Iterable
- Let's say, there's an object named 'obj' having few random properties and you want to
run for-so-and-so loop with 'obj'. Should you think that you can always successfully loop it,
you have a kind of wrong understanding of what iterable means. The reason why you could see
what's in your object by using for-loop, is because that object had a property of Symbol(Symbol.iterator)
in its prototype object, and they are one of Array, String, Map, and Set.
Let us take a look at the short example real quick

*/

console.log(Object.getOwnPropertySymbols(Array.prototype)); // [Symbol(Symbol.iterator), Symbol(Symbol.unscopables)]
console.log(Object.getOwnPropertySymbols(String.prototype));// [Symbol(Symbol.iterator)
console.log(Object.getOwnPropertySymbols(Map.prototype));   // [Symbol(Symbol.iterator), Symbol(Symbol.unscopables)]
console.log(Object.getOwnPropertySymbols(Set.prototype));   // [Symbol(Symbol.iterator), Symbol(Symbol.unscopables)]

/*

So Array, String, Map and Set have Symbol[Symbol.iterator]. Meaning is, if an object has Symbol[Symbol.iterator] and
if that symbol thing returns an 'iterator object' from the next() method decalred inside the body of that symbol
,it's considered an iterable object, meaning again, it means you can use for-loop with it. 
However, if it doesn't have Symbol[Symbol.iterator] or next() method though Symbol[Symbol.iterator] exist,
it's not iterable, so you cannot loop over it.

e.g:
*/

/* These are for-loops with iterable objects */
for(let x of [1,2,3]) console.log(x); // 1 2 3
for(let x of 'hello') console.log(x); // h e l l o
for(let x of new Map([['name', 'john'], ['age', 28]])) console.log(x); // Object['name', 'john'], Object['age', 28];
for(let x of new Set([1,2,3])) console.log(x); // 1 2 3

/* This is not iterable, so it throws an error to you */
for(let x of {a:1, b:2}) console.log // Uncaught TypeError

/* To make it right, you must conver it to an iterable object.
For further information on how to, open the file, 3-iterator.js */