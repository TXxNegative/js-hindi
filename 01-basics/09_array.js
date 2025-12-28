//arrays

/*const myarray = [0,1,2,3,4,5,true,"hitesh"]//array can have differrent data type element
const myhero=["hulk","iron man"]
const mop=new Array(9,0,8,78)

console.log(myarray[7])

//array methods
myarray.push(7)//enter element at the end of the list
console.log(myarray);
myarray.pop()//remove one element from the end of the list
console.log(myarray);
myarray.unshift(89)//it is not optimised ,because first it shift the all elements toward right then it enter the element at first
console.log(myarray);
myarray.shift()//remove first element of the array
console.log(myarray);
myarray.shift()
console.log(myarray);
console.log(myarray.includes(9));//datatype boolean*/

/*const newarr=myarray.join()//convert the array in string form 
console.log(newarr)
console.log(myarray);*/

//slice,splice difference
/*console.log("A",myarray);
const l0=myarray.slice(1,3)//show element at possition 1,2 not 3 of the array
console.log(l0);
console.log("B",myarray)

console.log("A",myarray);
const l1=myarray.splice(1,3)//show element at possition 1,2,3 AND ALSO REMOVE THE ELEMENTS FROM THE ARRAY 
console.log(l1);
console.log("B",myarray)*/

const marvel=["hulk","ironman","thor"]
const dc=["flash","superman","batman"]

/*marvel.push(dc);//in this way we are pusshing the whole array inside another array, not individual element([ 'hulk', 'ironman', 'thor', [ 'flash', 'superman', 'batman' ] ])
console.log(marvel);*/

/*const allhero=marvel.concat(dc)// in this method we are pusshin the each element in the array
console.log(allhero);*/

const allnewheros=[...marvel,...dc]//concatanate two arrays using spread
console.log(allnewheros);

const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const useantarr=anotherarr.flat(Infinity)//it will remove all array inside the array and create a single array using those values
console.log(anotherarr);
console.log(useantarr);

console.log(Array.isArray("dick"));// for checking the variable is array or not
const dj=Array.from("nigga")// for store a string in an array by seperate each character
console.log(Array.from("dick"));
console.log(Array.from({name:"dick"}))// it will show an empty array

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));//like concatanation

