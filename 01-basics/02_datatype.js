"use strict";//treat all js code as newer version
//alert(3+2)//we are using node js , not browser
/*let name="abhijit"
let age=18
let isloggedin=false*/

//DATA TYPES//

// *********** primitive ************* //
//number => range 2^53
//bigint 
//string =>""
//boolean =>TRUE/FALSE
//null =>standalone value
//undefined =.value not assigned
//symbol =>unique

/*console.log(typeof null)
console.log(typeof undefined)*/

/*const score = 100
const scorevalue=100.3
const isloggedin=false
const outsidetemp=null
let useremail;

const id=Symbol('123')
const id2=Symbol('123')//data type -> symbol

console.log(id===id2); //false

const bigNumber=2332443646353535345n*/

// ********* non primitive(reference type) *********** //
//object 
//array
//functions
//data type of all non primitive elements are object//

const heros=["ironman","thor","hulk"]

let myObj = {
    name:"abhijit",
    age:21,
}

const myFunction=function () {
    console.log("hello world");
}
console.log(typeof bigNumber);
console.log(typeof outsidetemp); //data type of null is object
