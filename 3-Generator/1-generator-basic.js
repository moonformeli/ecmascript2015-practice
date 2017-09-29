/*

To use a generator function, you should know 2 things on the generator before start,
1. Once you execute a generator function, it is not a function anymore, is an object.
2. generator function declaration can't be used with 'new' keyword.

-When you declare a generator function, then you should execute it once to create an object.
Plus, the output from execution of the generation function turns out an object.

-Since generator functions are not actually a function, it's not going with 'new' keyword.

*/

function* generator(){}
var foo = generator;
console.log(typeof foo); // 'function'
foo = generator();
console.log(foo.toString()); // '[object generator]'

/*

A generator object is an iterator object, so that means it can use next() method to loop over
an iterable object. But in a generator function, you don't really need the long process to declare
Symbol[Symbol.iterator]() and method(). With using 'yield' keyword in a function, it is going to 
take all the long steps out. 'yield' returns a value as {value: someValue, done: false} form.

When you call the generator(before call it, it's been waiting for running), it starts from the first line
and runs codes until it finds the yield that meets first. Once it faces to yield, it returns a value 
that is on 'right' of yield. If there's no values, it returns 'undefined'.

Generator remembers the point in which it stopped running. That point, by default, is from the previous
yield or the first line if it didn't start yet, to the next yield. If there's no next one, it returns 
undefined for 'value' and true for 'done'. 

So, the processes are like this:
1. Declare a generator function

2. Assign it by executing to a variable

3. When you call the variable at a time, the generator function referred by the variable will try to
find the next 'yield' keyword from the previous one. If it's its first start, then the previous yield
will be considered the first line

4. If there's an other yield, returns values on the right of yield, by making an object.
{value: yourValue, done: false} << This is the default form of a returned object from yield.
A value next to yield will be matched to 'yourValue' by default, and set 'done' property as 'false',
since making that returned object means your generator function already found the 'yield'

4-1. If there's no value though 'yield' exist, it returns 'undefined' for value

5. If there's no any other yields, returns {value:undefined, done:true}. In this situation, no matter
how many you are going to call the generator function, you'll only get that empty object.

*/

console.log('print()------------------');

function* print(){
	yield 1;
}
var bar = print();
console.log(bar.next()); // {value:1, done:false}
console.log(bar.next()); // {value:undefined, done:true}
console.log(bar.next()); // {value:undefined, done:true}

console.log('print()2------------------');

function* print2(){
	yield 1;
	yield 2;
}
var bar2 = print2();
console.log(bar2.next()); // {value:1, done:false}
console.log(bar2.next()); // {value:2, done:false}
console.log(bar2.next()); // {value:undefined, done:true}

console.log('print()3------------------');

function* print3(){
	yield;
	yield 1;
}
var bar3 = print3();
console.log(bar3.next()); // {value:undefined, done:false}
console.log(bar3.next()); // {value:1, done: false}
console.log(bar3.next()); // {value:undefined, done: true}