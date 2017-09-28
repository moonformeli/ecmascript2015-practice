/*

To loop over an object, that object must be an iterable, which means that it should have Symbol[Symbol.iterator] and
next() method that returns an iterator object. If you wonder about what 'iterable' means, please check out '2-iterable.js'

If you could loop over an object, such as Array, in your for-loop, that means your object had Symbol[Symbol.iterator]
method and also next() method inside. Once for-loop tries to look into an object, it runs Symbol[Symbol.iterator] method
returning 'this'. And 'this' given to for-loop makes it run next() method that contains some object which will be returned.
A retunred object include 'value' and 'done' properties, 'value' means a value and 'done' means a sort of flag variable
that the for-loop can know wether it's done or not, it has two values, either 'true' or 'false'. If the index of the for-loop
reaches to the end of an object, 'done' turns out 'false' and 'value' turns out 'undefined', then your for-loop would be done.

Even though you can't see next() method in your hand-made object, but don't worry, it has it through Symbol[Symbol.iterator]
method, by default. 

*/

/* This array has both Symbol[Symbol.iterator] and next() by default */
for(let x of [1,2,3]) console.log(x) // 1 2 3

//for(let x of {a:1, b:2}) console.log(x) // Uncaught TypeError

/*

But the problem is when you want to loop over an object object, like the line 21.
It's because if you put that object in console.dir(), if will notice it does not have Symbol thing.

*/

console.dir({a:1, b:2}); // No Symbol

/* 

So, if you want to work on an object, {a:1, b:2}, you must convert it to an iterable object.
There are 2 ways, fortunately, to convert it.

A) Array.from
This is a really simple and easy way to convert it. Just Array.from(obj) -> That's all you need to do.
Except 2 things, the object you want to convert using Array.from must have 'length' property and
each property you want to put in for-loop have to have a key typeof Number.
'length' property will be referred the number of for-loop should loop.
Since it's going to be an array-like object, which means anyway it will work like an array, so its indexs
need to be like 0, 1, 2, something like that.

*/

for(let x of Array.from({a:1, b:2, length:2})) console.log(x); // undefined undefined
for(let x of Array.from({0:1, 1:2, length:2})) console.log(x); // 1 2

/*

B) Customizing an object using [Symbol.iterator]() and next()
If you want to do something more complex, then this way might be proper for you.
Create an object. And delcare [Symbol.iterator]() method which returns 'this' bound to the object.
This 'this' will allows the for-loop to use and end up accessing to next() method.
And declare next() method that refers to the actual behavior you want the object to act.

*/

var obj = {
	count: 3,
	
	[Symbol.iterator](){
		return this;
	},
	next(){
		// Write its action
		// To return the value, you need to put 'value' referring to the value and 'done' referring to the flag of finish
		if(this.count == 0) return { value: undefined, done: true }
		else return { value: this.count--, done:false }
	}
}

var foo = {
	count: 2,
	
	[Symbol.iterator](){
		return this;
	},
	next(){
		if(this.count == 0) return { value: 'Hello world', done: true }
		else return { value: this.count--, done:false }
	}
}

for(let x of obj) console.log(x); // Print 3 2 1
/* Or, you can call next() explicitly */
console.log(foo.next()); // 2, done: false
console.log(foo.next()); // 1, done: false
console.log(foo.next()); // Hello world, done: true
console.log(foo.next()); // Hello world, done: true