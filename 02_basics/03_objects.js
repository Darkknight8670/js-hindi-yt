//construct method create  single ton
//*********************
const mysym = Symbol("123");

//object literal non singleton
const JsUser = {
    name: "hitesh", //name == "name"
    location: "india",
    email: "hitesh@gmail.com",
    "full name": "hitesh choudhary", //you can not access with dot notation
    [mysym]: "myvalue", //symbol syntax
    isLoggedIn: false

} //object literal
const PythonUser = new Object() // object instance

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mysym]);
//console.log(typeof JsUser[mysym]); ????


//Object.freeze(JsUser) // make object immutable
JsUser.email = "vikas@chatgpt.com" // will not change
console.log(JsUser.email);

console.log(JsUser)




JsUser.greeting = function()
{
    console.log("hello js user");
}

//this keyword in method
JsUser.greeting2 = function()
{
    console.log(`hello js user ${this.name}`);
    
}

console.log(JsUser.greeting); //undefined beacause object is frozen


JsUser.greeting;
JsUser.greeting();

JsUser.greeting2();



