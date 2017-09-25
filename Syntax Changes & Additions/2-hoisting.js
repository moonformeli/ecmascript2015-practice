/*

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

The box item above is representing a variable object that is stacked onto the execution context. When the interpreter of Javascript starts to look all the codes from the top to the very bottom, it creates a excution context when some new semantic code area appears, such as a function.

In the variable object, there are 2 variables named a, referring to a function, and b, referring to a variable. If the interpreter meets any variables declared in the code, it hoists those variables to the very top of the scope. As the variable a declared as a fuction with the body part has been hoisted to the top, on the contrast, the variable b, even though it had a value assigned, like 'var b = 1', hasn't carry it to the top. So, b would be going to wait for being assigned a value after.

There are few examples of what hoisting really means and how to use them in a code.
*/

//ES5
function es5(){
    console.log(a); // Print undefined - a was hoisted but the value assigned
    var a = 10;
    console.log(a); // Print 10
    
    console.log(b); // Print 'function b' - function b was hoisted with its body
    function b(){
        console.log('function b');
    }
    console.log(b); // Print 'function b'
    
    console.log(typeof c); // Print 'undefined' - c was hoisted but not assigned yet
    var c = function(){};
    console.log(typeof c); // Print 'function'
    
    console.log(typeof d); // Print 'undefined' - c was hoisted but not assigned yet
    var d = function d(){};
    console.log(typeof c); // Print 'function'
}

//es5();

console.log('--------------------------');

//ES6

function es6(){
    console.log(a); // Uncaught ReferenceError : a is not defined
    let a = 10;
    console.log(a); // Print 10
    
    console.log(b); // Print 'function b' - function b was hoisted with its body
    function b(){
        console.log('function b');
    }
    console.log(b); // Print 'function b'
    
    console.log(typeof c); // Uncaught ReferenceError : c is not defined
    let c = function(){};
    console.log(typeof c); // Print 'function'
    
    console.log(typeof d); // Uncaught ReferenceError : d is not defined
    let d = function d(){};
    console.log(typeof c); // Print 'function'
    
    console.log(f); // Uncaught ReferenceError : f is not defined
    const f = 3.14;
    
    const g;
    console.log(g); // Error: Missing initializer in const declaration
    g = 100;
}

es6();

var Car = new Vihecle('Car');
console.log(Car); // Uncaught ReferenceError : Vihecle is not defined

class Vihecle{
    constructor(model){
        this.model = model;
    }
}

/*

Now as you can notice, the best recommended way to declare variables and functions is to declare them before actually use, unless you want to get in trouble after all.

*/