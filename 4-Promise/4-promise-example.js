var timer = function(ms){
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('time: ' + ms + 's');
			res('done');
		}, ms * 1000);
	});
};

timer(1)
.then((result) => {
	console.log(result);
	return timer(2);
})
.then((result) => {
	console.log(result);
	return timer(3);
})
.then((result) => console.log(result + ' , all done'))
.catch((err) => console.error(err));