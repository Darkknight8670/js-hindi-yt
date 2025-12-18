//for of


const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log("Value is: " + value);
}


//Maps

const map = new Map();
map.set('a',1);
map.set('b',2);
map.set('c',3);

for(const [key, value] of map)
{
    console.log(`Key: ${key}, Value: ${value}`);
}
//remember order is preserved in maps

//Output: Key: a, Value: 1
//        Key: b, Value: 2
//        Key: c, Value: 3


//objects iteration

const obj = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

for (const key of Object.keys(obj)) {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
}

