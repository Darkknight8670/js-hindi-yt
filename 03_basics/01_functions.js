function syMyName()
{
    console.log("vikas");
    
}

syMyName();

function addTwoNumbers(num1, num2)
{
    console.log(num1+num2);
}

addTwoNumbers(5,7); //12
addTwoNumbers(10,"13"); //1013

const result = addTwoNumbers(5,15); 
console.log(result);//undefined

function addTwoNumbersReturn(num1, num2)
{
    return num1+num2;
}

const result2 = addTwoNumbersReturn(5,15); 
console.log(result2);//20


function loginUserMessage(username) //also can use default parameter username="sam"
{
    if(username === undefined)  //use !username
        {
            console.log("enter kr username");
            return;
        }
    
    return `user: ${username} just logged in `;
}

console.log(loginUserMessage("vikas"));
console.log(loginUserMessage());

//rest parameters
function calculateCartPrice(...num1) //...num1 = array
{
    return num1;
} 

console.log(calculateCartPrice(200,300,400,500)); //array return


const user = {
    username: "vikas",
    price : 500
}

function handleObject(obj)
{
    console.log(`username is ${obj.username} and price is ${obj.price}`);
    
}

handleObject(user);
handleObject({username: "sam", price: 1000});


const mynewArray = [1,2,3,4,5];

function returnSecondValue(arr)
{
    return arr[1];
}

console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([10,20,30,40]));