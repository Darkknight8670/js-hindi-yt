//primitive data types

//7 types : string, number ,boolean , null , undefined , symbol , Bigint

const score = 100;
const scoreValue = 99.9; //nuber number h

const isLoggedIn = false; //boolean type
const temperature = null; //null type
let name; //undefined type also  name = undefined

const id = Symbol("1234"); //symbol type
const bigNumber = 1234567890123456789012345678901234567890n; //bigint type
console.log(typeof bigNumber); //bigint



const anotherid = Symbol("1234"); //symbol type
console.log(id === anotherid); //false



//non primitive data type (reference data type)

//arrays
//objects
//functions


const heros = ["shaktiman", "nagraj", "doga"];

let myobj ={
    name: "vikas",
    age: 22,
    isMarried: false
}

let myfunc = function(){
    console.log("Hello");
    
}

console.log(typeof myfunc); //function
console.log(typeof heros); //object


//**************************** */

//stack vs heap memory

//primitive data types are stored in stack memory
//reference data types are stored in heap memory and address is stored in stack memory

let myytName = "vikas";
let anotherName = myytName;

console.log({myytName, anotherName}); //{ myytName: 'vikas', anotherName: 'vikas' }

anotherName = "harshit";

console.log({myytName, anotherName}); //{ myytName: 'vikas', anotherName: 'harshit' }

let userone = {
    email: "vikas@gmail.com",
    password: "1234"
}

let usertwo = userone;
console.log({userone, usertwo}); //{ userone: { email: '

usertwo.password = "0987";
console.log({userone, usertwo}); //