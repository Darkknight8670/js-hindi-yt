const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//foreach loop return nothing thats why we use filter
//filter even numbers
const myNums = mynums.filter((nums)=> {
    return nums>4
})

console.log(myNums);
//Output: [5, 6, 7, 8, 9, 10]


const books = [
    {title: 'Book A', author: 'Author 1', rating: 4.5},
    {title: 'Book B', author: 'Author 2', rating: 3.8},
    {title: 'Book C', author: 'Author 3', rating: 4.2},
    {title: 'Book D', author: 'Author 4', rating: 2.9},
    {title: 'Book E', author: 'Author 5', rating: 4.7}
]


const userbooks = books.filter((book)=> book.rating == 4.5)


console.log(userbooks);//Output: [ { title: 'Book A', author: 'Author 1', rating: 4.5 } ]