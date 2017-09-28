/*

There are 7 varibale types in ES6

String, Number, Object, Boolean, Undefined, Null, and Symbol.

Symbol is distinguished with all any other types.
It is the value that can be created and used as the key of a property to avoid
a conflict by the program as the same property names exist or something else.

When you call Symbol(), a new Symbol value is generated which does not belong to any.

Since Symbol has been made to wish to avoid to make conflicts, JavaScript's general 
objcet-inspection functions just ignore its key value, for instance, in case of for-in loop,
this loop just looks into an object, which the Symbol key is in, but not seeking Symbol.

Though Symbols you made have the same annotation inside, they are not considered the same object.
They're just like 2 people having the same last name, on the other hand, Symbol.for() is
sharing its annotation name since it has the registry in which annotations can stay and can be
extracted out to the outside when they're looked for.

Examples are below.

*/

var s1 = Symbol('symbol');
var s2 = Symbol('symbol');
console.log(s1 == s2);  // false
console.log(s1 === s2); // false

var s3 = Symbol.for('symbol');
var s4 = Symbol.for('symbol');
console.log(s3 == s4);  // true
console.log(s3 === s4); // true

//Symbol can't be converted to a String by appending as it is
var symbol_to_string = Symbol('World');
var greeting = 'Hello ' + symbol_to_string; // Uncaught TypeErorr
var greeting2 = 'Hello ' + symbol_to_string.toString(); // Hello Symbol('World')
