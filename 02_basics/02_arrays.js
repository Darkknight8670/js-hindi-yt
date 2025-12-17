const marvel_heros = ["thor", "spiderman","ironman"];
const dc_heros = ["superman","batman","flash"];

//marvel_heros.push(dc_heros)

console.log(marvel_heros);

//console.log(marvel_heros[3][0]);

//this is the right way to do
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);//["thor", "spiderman","ironman","superman","batman","flash"]


//spread operator(best choice in more than 2 arrays)
const all_heros2 = [...marvel_heros,...dc_heros];
console.log(all_heros2);


//flattening an array
const another_array = [[1,2,3],[4,5,6],[7,8,9]];
const flattened_array = another_array.flat();
console.log(flattened_array); //[1,2,3,4,5,6,7,8,9]



Array.isArray(marvel_heros); 
console.log(Array.isArray(marvel_heros));//true

console.log(Array.isArray("tony"));//false

console.log(Array.from("hitesh")); //['h', 'i', 't', 'e', 's', 'h']

console.log(Array.from({name: "vikas"})); //[] interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));







