/*

Class is a certain way to define the relationship of inheritance between two objects.
In ES6, you can simply declare an inheritance relationship by writing 'extends' keywords in the middle of
names of two objects, like the example below.

First things first, we're going to look at how it was to create an inheritance in ES5, and then 
to see how it's changed in ES6.

*/

//ES5 inheritance
function Sports(member){
	this.member = member;
}
Sports.prototype.setItem = function(item){
	this.item = item;
};

function Soccer(member){
	Sports.call(this, member);
}
Soccer.prototype = Object.create(Sports.prototype, {
	setGround: {
		value: function(ground){
			this.ground = ground;
		}
	}
});
Soccer.prototype.constructor = Soccer;

var obj = new Soccer(11);
obj.setItem('Soccer');
obj.setGround('Seoul');

console.log(obj.member); // 11
console.log(obj.item); // Soccer
console.log(obj.ground); // Seoul

console.log('--------------------');

//ES6 inheritance
class Sports_ES6{
	constructor(member){
		this.member = member;
	}
	setItem(item){
		this.item = item;
	}
}
class Soccer_ES6 extends Sports_ES6{
	constructor(member){
		super();
		this.member = member;
	}
	setGround(ground){
		this.ground = ground;
	}
}

var obj_es6 = new Soccer_ES6(11);
obj_es6.setItem('Soccer');
obj_es6.setGround('Seoul');

console.log(obj_es6.member); // 11
console.log(obj_es6.item); // Soccer
console.log(obj_es6.ground); // Seoul
