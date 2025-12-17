const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // converts number to string
console.log(typeof balance); // object

console.log(balance.toString().length); // 3

const num1 = 12.3456
console.log(num1.toFixed(2)); // 12.35


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // string with all digits 23.9

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); // 10,00,000


//+++++++++++++++++++ Math object+++++++++++++++++++++
console.log(Math);
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045

console.log(Math.round(4.6));// 5
console.log(Math.abs(-4)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(64)); // 8
console.log(Math.pow(2,3)); // 8

console.log(Math.random());// 0 to 1 (0 inclusive and 1 exclusive)
console.log(Math.random()*10+1); // 1 to 10.9999
console.log(Math.floor(Math.random()*10+1));// 1 to 10

const min = 10
const max = 20
console.log(Math.random()*(max-min+1)+min);// 10 to 20.9999
console.log(Math.floor(Math.random()*(max-min+1)+min));// 10 to 20


