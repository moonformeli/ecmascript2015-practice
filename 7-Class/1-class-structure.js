/*

In ES6, there's a new way to declare an object, it's 'Class'. Class is a sort of a property from an OOP language,
stands for Object-Oriented Programming Language. Even though JavaScript also could follow OOP way, but it was
pretty complex compared to the other languages, such as Java.

So, we need to know what exactly happens when JavaScript-ES6 Class keyword is used.
Running this code in person is absolutely recommended, reading codes with eyes and trying to understand with not
running is also fine.

*/

//ES5
function Person(name){
	this.name = name;
}
Person.prototype.setAge = function(age){
	this.age = age;
};
Person.prototype.getAge = function(){
	return this.age;
};
Person.prototype.getName = function(){
	return this.name;
};

var john = new Person('john');
john.setAge(28);
console.log(john.getName());
console.log(john.getAge());
console.dir(john);

/* In ES6, if you declare a function inside of Class Object, it will be stored to its prototype. */
//ES6
class Class{
	constructor(name){
		this.name = name;
	}
	setAge(age){
		this.age = age;
	}
	getAge(){
		return this.age;
	}
	getName(){
		return this.name;
	}
};

var seli = new Class('seli');
seli.setAge(20);
console.log(seli.getAge());
console.log(seli.getName());
console.dir(seli);

/* 
To declare a function later into Class, it's required to write .prototype unless you don't want to give them
to its child object.
*/
Class.prototype.print = function(){
	console.log('print');
}
seli.print(); // print
