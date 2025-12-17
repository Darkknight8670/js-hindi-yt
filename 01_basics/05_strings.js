const name = "vikas"
console.log(name[0]); //v

const repoCount = 50
//bad syntex
console.log(name +" "+ repoCount); //vikas50


//modern syntex (template literals)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)



const gameName = new String("chess")
console.log(typeof gameName); //object

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));//s
console.log(gameName.indexOf('h')); //1

const newString = gameName.substring(0,3)
console.log(newString); //che

const anotherString = gameName.substring(2) //ess

const anothernewString = gameName.slice(-4,-1) //hes
console.log(anothernewString);


const newStringone = "    vikas     "
console.log(newStringone); //    vikas
console.log(newStringone.trim()); //vikas


const url = "https://vikas.com/about?name=vikas&job=developer  "
console.log(url.replace("vikas","harshit")); //https://harshit.com/about?name=vikas&job=developer


console.log(url.includes("vikas")); //true

console.log(gameName.split('e')); //[ 'ch', 'ss' ]

