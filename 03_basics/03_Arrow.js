const user ={
    username: "vikas",
    price: 999,
    welcomeMessage: function()
    {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
 user.username = "john";
console.log(this);



//arrow function
//hjust remove function keyword and add =>
    const chai = ()=>{
        console.log(this.username);
    }
    chai();

const addTwo = (nums1, num2)=>{
    return nums1+ num2
}

console.log(addTwo(7,2));


//implicit return = remove curly braces and return keyword
const addThree = (num1, num2, num3) => num1 + num2 + num3;

console.log(addThree(2,3,4));

//for objects
const getUser = () => ({username: "vikas", price: 999});

console.log(getUser());

