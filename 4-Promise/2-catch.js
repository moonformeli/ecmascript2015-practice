/*

If you want to keep the methods chain, you can use catch() method which can catch an error and take an action.
catch() method can catch errors amongs then() methods declared above it.

*/

var p = function(){
	return new Promise(function(resolve, reject){
		console.log('1');
		resolve('resolve');
	});
}

var q = function(){
	return new Promise(function(resolve, reject){
		console.log('2');
		reject('reject');
	});
}

p()
.then(function(){ return q() })
.then(function(){
	console.log('3')
})
.catch(function(err){
	console.error(err);
})
.then(function(){
	console.log('4');
});

// 1 2 reject 4