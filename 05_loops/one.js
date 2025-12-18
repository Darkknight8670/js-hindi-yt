//there is now out of bound error in array 
//if you access an index that does not exist you will get undefined
let arr = [10, 20, 30, 40, 50];

//accessing an index that does not exist
console.log(arr[10]); //undefined


//break statement
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 30) {
        break; //exit the loop when value is 30
    }
    console.log(arr[i]);
}

//continue statement
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 30) {
        continue; //skip the value 30
    }
    console.log(arr[i]);
}