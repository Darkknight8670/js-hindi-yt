//arrays
let myArr = [0,1,2,3,"vikas",5];
console.log(myArr); //[0,1,2,3,"vikas",5]
console.log(myArr[0]);

let myarr2 = myArr;
console.log(myarr2); //[0,1,2,3,"vikas",5]

myarr2[0] = "changed";
console.log(myarr2); //["changed",1,2,3,"vikas",5]
console.log(myArr); //["changed",1,2,3,"vikas",5]


//arraay use shallow copy


const myrr = new Array(1,2,3);
console.log(myrr); //[1,2,3]
console.log(myrr[0]);//1

//Array Methods

myArr.push(6);
console.log(myArr); //[ 'changed', 1, 2, 3, 'vikas', 5, 6 ]

myArr.pop();
console.log(myArr); //[ 'changed', 1, 2, 3, 'vikas', 5 ]

//time complexity O(n)
myArr.unshift("first");
console.log(myArr); //[ 'first', 'changed', 1, 2, 3, 'vikas', 5 ]

myArr.shift();
console.log(myArr); //[ 'changed', 1, 2, 3, 'vikas', 5 ]

console.log(myArr.length); //6

console.log(myArr.includes(9));

console.log(myArr.indexOf(9)); // -1
console.log(myArr.indexOf(3)); //3


const newArr = myArr.join();
console.log(typeof newArr); //string
console.log(newArr); //changed,1,2,3,vikas,5


//slice, splice

console.log("A ", myArr)





