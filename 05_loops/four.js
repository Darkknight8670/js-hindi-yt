const obj = {
    name: 'Alice',  
    age: 30,
    city: 'New York'
  };

  //for in loop to iterate over object properties

    for (const key in obj) {    
    console.log(`Key: ${key}, Value: ${obj[key]}`);
  }
  
  //Output: Key: name, Value: Alice
  //        Key: age, Value: 30
  //        Key: city, Value: New York

  //for in loop to iterate over array indices
    const arr = ['apple', 'banana', 'cherry'];
    for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
  }
  
  //Output: Index: 0, Value: apple
  //        Index: 1, Value: banana
  //        Index: 2, Value: cherry


  //for map iteration using for in (not recommended)
    const map = new Map();
    map.set('x', 10);
    map.set('y', 20);
    map.set('z', 30);
    
    for (const key in map) {
      console.log(`Key: ${key}, Value: ${map[key]}`); // This will not work as expected
    }
    
    //Output: (no output, as for...in does not work with Map)