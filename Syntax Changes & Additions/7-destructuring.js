/*

Destructuring syntax is the cool way to assign values to variables without taking many steps.

You can use either [] or {}, depending on how you want to extract datas from an original source.
Even Spread syntax can be a useful way, especially, of omitting some variables you don't really want to take from the source.
If there's a caution, it would be that the names you want to use as a variable must be the same as the ones from the object
in which you want to extract, like line 23. If names are different, datas won't be assigned though they were extracted.

*/

var a, b, rest;
[a, b, ...rest] = [1,2,3,4,5,6,7];

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3,4,5,6,7]

var {q, p} = {name: 'John', age: 28};
console.log(q); // undefined
console.log(p); // undefined

var {name, age} = {name: 'John', age: 28};
console.log(name); // 'John'
console.log(age); // 28

({city, country, ...rest} = {city: 'Korea', country: 'Seoul', job: 'Developer', age: 30});
console.log(city); // 'Korea'
console.log(country); // 'Seoul'
console.log(rest); // {job: 'Developer', age: 30}

//Destructuring an Array
var foo = ['one', 'two', 'three'];
([one, two, three] = foo);
console.log(one); // 'one'
console.log(two); // 'two'
console.log(three); // 'three'

//Destructuring a function
function fn(){
    return [1, 2];
}

([a, b] = fn());
console.log(a); // 1
console.log(b); // 2

([, q] = fn());
console.log(q); // 2
