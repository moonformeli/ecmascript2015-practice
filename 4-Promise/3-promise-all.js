/*

Promise.all() is used when you want to do something after check every works are done properly.
If any of works is sent by reject(), Promise.all() is going to throw an error.

*/

var p = function(param, time){
	return new Promise(function(resolve, reject){
		setTimeout(() => {
			console.log(param);
			resolve('success');
		}, time * 1000);
	});
}

Promise.all([p('first', 3), p('second', 2), p('third', 1)])
.then((message) => console.log(message),
(err) => console.error(err));

// Print thrid second first
/*
Even though p('first') was called ealier than p('third') was called, since the time parameter for setTimeout
is not the same, the output order might be different.
*/

var q = function(param, time){
	return new Promise(function(resolve, reject){
		setTimeout(() => {
			console.log(param)
			if(time == 2 ) reject('ERROR!!');
			resolve('success');
		}, time * 1000);
	});
}

Promise.all([q('aaa', 3), q('bbb', 2), q('ccc', 1)])
.then((message) => console.log(message),
(err) => console.error(err));

// Print ccc bbb ERROR!! aaa