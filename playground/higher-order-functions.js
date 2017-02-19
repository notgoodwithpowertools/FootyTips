function one (name, location) {
 console.log('F1:', name, location);
}

function two () {
  console.log('Function Args:', arguments);
  one.apply(undefined, arguments);
}

two('Andrew', 'Melbourne');

// Use apply method to call functions

// apply func uses two arguments - the this to call it with, then the args
//two.apply(undefined, ['Jane', 'Surrey Hills'] )

// Higher order functions

// Call & modilfy an existing func

var add = (a, b) => a + b;

console.log('Add:',add(99,1));


var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
    console.log('Result:', res);
    return res;
  }

}

console.log('Add:',add(99,1));
var addAndLog = callAndLog(add);

addAndLog(44, -3);

var square = (a) => a * a;

var squareAndLog = callAndLog(square);

squareAndLog(5);
