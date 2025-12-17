//singleton constructor method

const tinderUser = new Object() //singleton object
const hingeUser = {} //non singleton object

console.log({tinderUser, hingeUser});

tinderUser.name = "John Wick"
tinderUser.age = 45
tinderUser.isMarried = false

console.log(tinderUser);

const regularUser = {
    fullname:{
        firstname: "vikas",
        lastname: "kumar"
    }
}

console.log(regularUser.fullname.lastname);


//merging two objects
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {...obj1, ...obj2} //spread operator


console.log(Object.keys(tinderUser));  //datatype is arrays

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));//2d array

console.log(tinderUser.hasOwnProperty("age")); //true

// different way to access object properties
const course = {
    coursename: "js",
    price: 999,
    courseInstructor: "vikas"
}
//destructuring of object
const {coursename, price, courseInstructor} = course;
console.log(coursename);
console.log(price);
console.log(courseInstructor);

//aliasing while destructuring
const {courseInstructor: ins} = course;// ins short h
console.log(ins);

//json - javascript object notation
// {
//     "name": "vikas",
//     "age": 24,
//     "isEmployed": true
// }
//if not variable then it is json format
