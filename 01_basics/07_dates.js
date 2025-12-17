//dates

let myDate = new Date();
console.log(myDate); // 2025-12-17T12:29:04.998Z

console.log(myDate.toString()); //Wed Dec 17 2025 12:30:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Wed Dec 17 2025
console.log(myDate.toTimeString());//12:30:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()); //2025-12-17T12:30:31.123Z
console.log(myDate.toLocaleString()); //12/17/2025, 12:30:31 PM
console.log(myDate.toLocaleDateString()); //12/17/2025
console.log(myDate.toLocaleTimeString()); //12:30:31 PM


const myCreatedDate = new Date(2023,0,23); //23 january 2023
console.log(myCreatedDate.toLocaleDateString()); //1/23/2023

const myCreatedDate2 = new Date(2023,0,23,5,3);
console.log(myCreatedDate2.toLocaleString()); //1/23/2023, 5:03:00 AM

const myCreatedDate3 = new Date("01/23/2023 05:03:00");
console.log(myCreatedDate3.toLocaleString()); //1/23/2023, 5:03:00 AM

let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp); //1702791031123

console.log(myCreatedDate.getTime());//1705951800000

console.log(Math.floor(Date.now()/1000)); //in seconds since epoch


let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getHours());


newDate.toLocaleString('default', {weekday:'long'}); //Wednesday

