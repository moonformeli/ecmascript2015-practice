/*

If you want to make an order of async functions, using Promise will be the best.
Promise takes an executer function that needs 2 parameters, resolve() and reject().
Once your async function has finished its work successfully, you can call resolve() to let 
the process know it can keep going. If there's an error appeared, reject() is going to be called.

Promise has then() method that allows you to keep chaining, like Promise().then().then()...
So once resolve() is called, then() will be called after the interpreter reads all the codes since
basically contents in Promise object are considered an asynchronous function, they're stacked in 
a Call stack seperated from the Main stack.

*/

var p = new Promise(function(resolve, reject){
	console.log('1');
	resolve();
});

p.then(function(){
	console.log('2');
});

console.log('3');

// The result is 1 3 2
/* 
Because when p is called, the Promise object is generated and returned. The Promise object had a function
as a paramter and the function had console.log('1'), so that console was ran when Promise was made.
However, though p had an object of Promise in line 20, it does not go to then() method right away, since
there was resolve() in function, line 17. In order to run the code in then(), the interpreter should finish
to read all the codes first, so then() was stacked in a call stack to wait for its turn. And then 
console.log('3') was ran and then finally then() was taken away from the Call stack.
*/

var q = function(param){
	return new Promise(function(resolve, reject){
		if(param === 'success') resolve('success');
		else reject('fail');
	});	
}

q('fail').then(function(param){
	console.log('resolve: ' + param);
}, function(param){
	console.log('reject: ' + param);
});

// The result is reject: fail
/*
If reject() is called, then the second parameter function of then() method is going to be called.
*/