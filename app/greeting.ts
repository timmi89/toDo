class Greeter {
  constructor (public message: string) {}
  greet() {
    return "hello, " + this.message;
  }
}

// javascript version of above
// var Greeter = function(message) {
//   this.greeting = message;
// }
//
// Greeter.prototype.greet = function() {
//   return "hello, " + this.greeting;
// }


var greeters= [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how old are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for (var greeter of greeters){
  alert(greeter.greet());
}

// for(var of var) loop explanation:
// This is a handy way to loop through all the elements in an array called greeters. It means "take each item in the array and put it into a variable. Then run the operations in the curly brackets once for each item, using the variable we created to represent the current element."

// sorta js version of above
// var greeting1 = new Greeter("hello");
// var greeting2 = new Greeter("hola");
// var greeting3 = new Greeter("mwiriwe");
//
// greeting1.greeting
// greeting1.greet(); // "hello, hello"
