const coding = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];

coding.forEach(function(val){
    console.log(val);
})
//Output: JavaScript
//        Python
//        Ruby
//        Java
//        C++


coding.forEach((item)=>{
    console.log(item);
})
//Output: JavaScript
//        Python
//        Ruby
//        Java
//        C++

coding.forEach((item, index, array)=>{
    console.log(`Index: ${index}, Value: ${item}, Array: ${array}`);
})
//Output: Index: 0, Value: JavaScript, Array: JavaScript,Python,Ruby,Java,C++
//        Index: 1, Value: Python, Array: JavaScript,Python,Ruby,Java,C++
//        Index: 2, Value: Ruby, Array: JavaScript,Python,Ruby,Java,C++
//        Index: 3, Value: Java, Array: JavaScript,Python,Ruby,Java,C++
//        Index: 4, Value: C++ , Array: JavaScript,Python,Ruby,Java,C++


const mycoding = [
    {name: 'JavaScript', difficulty: 'Medium'},
    {name: 'Python', difficulty: 'Easy'},
    {name: 'Ruby', difficulty: 'Medium'},
    {name: 'Java', difficulty: 'Hard'},
    {name: 'C++', difficulty: 'Hard'}
]

mycoding.forEach((item)=>{
    console.log(`Language: ${item.name}, Difficulty: ${item.difficulty}`);
})
//Output: Language: JavaScript, Difficulty: Medium
//        Language: Python, Difficulty: Easy
//        Language: Ruby, Difficulty: Medium
//        Language: Java, Difficulty: Hard
//        Language: C++, Difficulty: Hard   