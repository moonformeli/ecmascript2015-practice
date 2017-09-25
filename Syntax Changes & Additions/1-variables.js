/*
ES5 has been supporting 'var' as a keyword for a variable.
As ECMAScript 2015 has been released, there are new keywords named 'let' and 'const'

The difference you can see through 'let' and 'var' is their scope.
As you already know, the scope area of 'var' is follwoing the function containing that variables, however, 'let' doesn't follow this rule at all. 'let' always sees the one scope rule, the nearest scope area of it. 

Const, the immutable variable, once it's declared, is never going to be changed, no matter what. So if you want to declare something that will never be changed, you should use const.

Look at the examples down below
*/

var a = 1;
let b = 2;

function fn(){
    var a = 10;
    let b = 20;
    console.log(a); // Print 10
    console.log(b); // Print 20
    
    if(true){
        var a = 100;
        let b = 200;
        console.log(a) // Print 100
        console.log(b) // Print 200
    }
    
    console.log(a); // Print 100
    console.log(b); // Print 20
    // The scope of let is always block-unit
};

fn();

const pi = 3.14;

console.log(pi); // Print 3.14

pi = 314; // Uncaught TypeEror : Assignment to constant variable.