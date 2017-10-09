/*

Proxy is a subsititue object that allows an another object to get data through the proxy object.
The main purpose of using Proxy object is to control the built in methods in an object, such as 
getter or setter.

In this example, I'll just deal with a getter and a setter.

*/

var target = {
   name: 'John',
   get getGender(){
	   return 'His gender is ' + this.gender;
   }
}
var handler = {
   get(target, key){
      return 'This is ' + target[key];
   },
   set(target, key, value, receiver){
      target[key] = 'Set value is ' + value;
      return true;
   }
}
var proxy = new Proxy(target, handler);
var obj = proxy.name;
console.log(obj); // This is John

proxy.gender = 'male';
console.log(proxy.gender); // This is Set value is male
console.log(target.gender); // Set value is male
console.log(target.getGender); // His gender is Set value is male