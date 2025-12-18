
const userename = "Alice";

if (userename) {
  console.log("Username is set to:", userename);
} else {
  console.log("No username provided.");
}

//falsy values
//false, 0, -0, BigInt(0), "", null, undefined, NaN


//truthy values
//true, any non-zero number, any non-empty string, {}, [], function() {}


const arr = [];
if (arr.length > 0) {
    console.log("Array has elements");
} else {
    console.log("Array is empty");
}


const obj = {};if (Object.keys(obj).length > 0) {
    console.log("Object has properties");
} else {
    console.log("Object is empty");
}



//nullsish coalescing operator
val2 = 5 ?? 10;// val2 = 5
val1 = null ?? 10;// val1 = 10
val3 = undefined ?? 10;// val3 = 10

//ternary operator
const score = 85;
const grade = score >= 90 ? 'A' :
                score >= 80 ? 'B' :
                score >= 70 ? 'C' :
                score >= 60 ? 'D' : 'F';    
console.log("Grade is:", grade);

