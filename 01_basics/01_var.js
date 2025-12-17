const acc_id = 12345;
let acc_email = "vikas@example.com"
var acc_password = "1234"
acc_city = "jaipur"

//acc_id = 2   //not allowed
acc_email = "hc@email.com"
acc_password = "0987"
acc_city = "delhi"
console.log(acc_id);
console.log(acc_email);
console.log(acc_password);
console.log(acc_city);


console.table([acc_id,acc_email,acc_password,acc_city]);

let acc_state;
console.log(acc_state); //undefined
// dont use var now a days because of its functional scope issue
//use let and const instead of var
