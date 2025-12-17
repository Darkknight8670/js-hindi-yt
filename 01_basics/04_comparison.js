console.log(2>1); //true normal

console.log("2">1); //true string 2 is converted to number 2

console.log("02">1); //true string 02 is converted to number 2

console.log(null>0); //false
console.log(null==0); //false NaN convert
console.log(null>=0); //true


console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false

//=== strict equality operator
console.log(2==="2"); //false
console.log(2=="2"); //true

console.log(null===undefined);//false
console.log(null==undefined);//true

