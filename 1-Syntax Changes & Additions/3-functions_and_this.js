/*

Variable Object of Function(){}
┌----------------------------┐
│ arguments, parameters      │
│ -------------------------- │
│ Scope Chains               │
│ -------------------------- │
│ a -> refers to the function│
│ -------------------------- │ --> varibale object
│ b -> undefined             │
│ -------------------------- │
│ this                       │
└----------------------------┘

In ES5, when a function is declared, it creates 'this' referring to 
Scope of this function by default in which this function is made.

ES6, the new version of JavaScript, you can utilize the new feature, 
Arrow Function that reduces your annoying headaches 
from connecting and linking functions and 'this' of them.

Arrow functions does not create 'this' keyword by default when it's declared. 
When you were using Function(), you always had to end up considering 
how to and where to bind 'this' of the function. 
On the other hand, since Arrow function doesn't have 'this', 
when you use 'this' in it, 'this' will always talk to the outer function.

Here are examples explaning of 'this' and Arrow functions.

*/

/* 
    Arrow Functions 
*/
function fn(param1, param2){
    return param1 + param2;
}

console.log(fn(1,2)); // Print 3

// Since the arrow function is always considred an anonymous function, 
// you should assign the function to a variable to use later.
var fn_arrow = (param1, param2) => param1 + param2;

console.log(fn_arrow(1,2)); // Print 3

function fn_single(param1){
    return param1;
}

// When there's a single line of codes in a function, 
// brackets and parentheses can be omitted.

//var fn_arrow_single = (param1) => param1;
var fn_arrow_single = param1 => param1;

console.log(fn_arrow_single(1));

console.log('---------------------------------');

/*
    'this' binding
*/

//Ex-1
function sayName(){
    return this.name;
}

var sayName_arrow = () => this.name;

var name = 'Seli';

var obj = {};
obj.name = 'John';
obj.sayName = sayName;
obj.sayName_arrow = sayName_arrow;

console.log(obj.sayName()); // Print 'John'
console.log(obj.sayName_arrow()); // Print 'Seli'
// While the 'this' keyword in sayName() is bound to the object, 
// 'obj', which called this function, 'this' in sayName_arrow(), 
// that is an arrow function, is bound to the outer object/function
// , global object in this case.

//Ex-2
var name = 'global';
var obj2 = {};
obj2.name = 'obj2';
obj2.getName = getName;

function getName(){
    function inner(){
        console.log(this.name); // Print 'global'
    }

    var inner_arrow = () => console.log(this.name); // Print obj2

    inner();
    inner_arrow();
}

obj2.getName();