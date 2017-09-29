/*

yield can be possibly used with for-loop.

*/

var gen = function*(value){
	while(value < 15) yield value++;
};
/* value is matched to x */
for(let x of gen(10)){
	console.log(x); // 10 11 12 13 14 15
}

//Using yield in an example more complex
//Once the generator meets 'return', then it sets 'done' as 'true'
let getAmount = function*(qty, price){
	let amount = Math.floor(qty * price);
	let discount = yield amount;
	return amount - discount;
};

let getDiscount = function(amount){
	return amount > 1000 ? amount * 0.2 : amount * 0.1;
};

let amountObj = getAmount(10, 60);

let result = amountObj.next();
console.log(result); // {value: 600, done: false}
let dcAmount = getDiscount(result.value);
console.log(dcAmount); // 60
console.log(amountObj.next(dcAmount)); // {value: 540, done: true}