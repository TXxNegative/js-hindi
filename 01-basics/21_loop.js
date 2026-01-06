/*const coding=['js','ruby','java','python','cpp']
const values=coding.forEach((item)=>{
    console.log(item);
    return item // foreach dont return any value 
})
console.log(values);*/

const mynums=[1,2,3,4,5,6,7,8,9,10]

const newnums=mynums.filter((num) => num>4)
console.log(newnums);// filter can return values but  need some condition


const newnums1=mynums.filter((num) => {
    num>4 // it will give empty array because we need to use return when we use {}, for further information go through arrow function 
})
console.log(newnums1);

/*
const newnums2=mynums.filter((num) => {
    return num>4 
})
console.log(newnums);
*/

/*const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
    publish: 1979,
    edition: "First Edition"
  },
  {
    title: "Pride and Prejudice",
    genre: "Classic Fiction",
    publish: 1813,
    edition: "Barnes & Noble Classics Edition"
  },
  {
    title: "1984",
    genre: "Dystopian Fiction",
    publish: 1949,
    edition: "Centennial Edition"
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: 1954,
    edition: "50th Anniversary Edition"
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Southern Gothic",
    publish: 1960,
    edition: "Paperback"
  },
  {
    title: "The Great Gatsby",
    genre: "Classic Fiction",
    publish: 1925,
    edition: "Scribner Edition"
  },
  {
    title: "One Hundred Years of Solitude",
    genre: "Magical Realism",
    publish: 1967,
    edition: "Vintage International Edition"
  },
  {
    title: "A Brief History of Time",
    genre: "Non-Fiction",
    publish: 1988,
    edition: "Updated and Expanded Edition"
  },
  {
    title: "Frankenstein",
    genre: "Gothic Horror",
    publish: 1818,
    edition: "Dover Thrift Edition"
  },
  {
    title: "The Catcher in the Rye",
    genre: "Literary Fiction",
    publish: 1951,
    edition: "Little, Brown and Company Edition"
  }
];

const userbooks=books.filter((bk)=> bk.genre==='Non-Fiction')
const userbooks1=books.filter((bk)=>{
    return bk.publish>=1960 && bk.genre==='Non-Fiction'})
console.log(userbooks,userbooks1);
*/


// use foreach as filter
/*const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=[]
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums);
*/


