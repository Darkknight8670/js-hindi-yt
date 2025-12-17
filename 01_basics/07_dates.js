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
