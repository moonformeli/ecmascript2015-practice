/*

To declare a function later into Class, it's required to write .prototype unless you don't want to give them
to its child object.

However, when you declare a Class Object, if you use 'static' keyword at the beginning of the name of a function,
it will not be in the prototype object. Where they will be located is inside of the Class Object.

Meaning is, it's not possible to call a static-declared function after var a = new Class; form.
Because, when you create a Class,(techinally Class in JavaScript is not Class Class like in Java, it's actually
a function type) the new created empty object will connect to the prototype of Class with its prototype[link] property.
(In Chrome console, it's __proto__). So, the empty class(let's say 'a' which is above short example) will cause
prototype chaining, then the chaining will search for the function you called along the chaining. So, there's 
no function in any prototype objects, if the function you're looking for is a static-function. 
That's why it smoothly goes with the fact that you must call it like ClassName.function()

*/

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
	static print(){
		console.log('Name:' + this.name + ', Age:' + this.age);
	}
};

var john = new Person('john', 28);
console.log(john.getName()); // john
console.log(john.getAge()); // 28
Person.print(); // Name: Person, Age: undefined
john.print(); // Uncaught TypeError