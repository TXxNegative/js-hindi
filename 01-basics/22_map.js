const mynums=[1,2,3,4,5,6,7,8,9,10]

/*const newnums=mynums.map((num)=>num+10) // in maps we dont need condition like filter , we can return any values
console.log(newnums);
*/

//Chaining
/*const newnums=mynums
    .map((num)=>num*10)// this num conatain values of mynums array
    .map((num)=>num+1)// this num will contain the values of uppernum
    .filter((num)=> num>=40)

console.log(newnums);
*/

//Reduce in array(there are accumulator and currentvalue use in this method, we also need to assign the accumulator manually)
//(use in shopping car method), use to sum current value with next upcomming values
// 0+1+2+3+4+5 (use to sum the values inside the object which is present inside an array)
const nums=[1,2,3]

/*const mytotal=nums.reduce(function (acc,currval){
    console.log(acc, "and" ,currval);
    return acc+currval
},4)

console.log(mytotal);
*/

/*const mytotal=nums.reduce((acc,currval)=> acc+currval,4)
console.log(mytotal);//ussing arrow function
*/

//use as a total value calculator(shopping cart total value)
const shoppingcart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"python course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"data science course",
        price:12999
    }
]
const total=shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(total);// assign accumulator value as 0

// DONE WITH BASICS , TIME FOR REAL DEAL