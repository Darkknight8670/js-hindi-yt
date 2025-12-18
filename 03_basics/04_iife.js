// Immediately Invoked Function Expression (IIFE)
//()()

//named IIFE
(function chai(){
    console.log("This function runs immediately upon definition!");
})(); //; // IIFE ends here


(()=>{
    console.log("This is another IIFE using arrow function syntax!");
})(); // IIFE ends here



((name)=>{
    console.log(`Hello, ${name}! This IIFE takes a parameter.`);
})("vikas");