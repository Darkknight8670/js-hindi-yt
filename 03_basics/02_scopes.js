let a = 300;
if(true){
    let a = 30;
    console.log("inner" + a);
}
console.log(a);


one();
function one()
{
    const username = "vikas";
    function two(){
        const website = "geeksforgeeks";
        console.log(username);
    }
    //console.log(website);
    two();
    
}

//hoisting
//addtwo(5);   give an error because addtwo is defined using function expression
const addtwo = function(num) 
{
    return num + 2;
}





