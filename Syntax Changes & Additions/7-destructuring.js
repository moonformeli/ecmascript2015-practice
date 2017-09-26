/*

Destructuring syntax is the cool way to assign values to variables without taking many steps.

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