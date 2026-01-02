/**********SCOPE **********/
/*let a=10
const b=20
var c=30

console.log(a);
console.log(b);
console.log(c);
*/

/*if(true){
    let a=10
    const b=20
    var c=30// it is global scope mean we can acces the value from the outside of the curly braces or the block
}

console.log(a);//don't print value this is good
console.log(b);//don't print value this is good
console.log(c);//print value but this is bad
*/

/*let a=30//global scope
if(true){
    let a=10//block scope
    const b=20
    console.log("inner",a);
}
console.log("outter",a)*/

//DOM = document object model

/***nested scope ***/
/*function one(){
    const username="abhijit"
    function two(){
        const website="youtube"
        console.log(username);
    }
    console.log(website);//parrent (one) can,t access variables of child()
    two()//this will call function (two) and print the value
    //but if we dont, call the (two) then inner function (two) will not be executed
}
one()*/

/*if(true){
    const username="abhi"
    if(username==="abhi"){
        const website="youtube"
        console.log(username+website)
    }
    console.log(website);// parrent can't access the values of the children so give error  
}
console.log(username);// username is on available inside the parent if  block so we cant access the block scope value outside the block
*/

//+++++++++ interesting ++++++++++

/*console.log(addone(5));// print the value, we can access the function before it can  be decleared
function addone(num){ // method 1 
    return num+1
}

console.log(addtwo(6));//give error (hoisting) because we can't print the value of variable before it even decleared  
const addtwo=function(num){ // method 2, here addtwo is act like variable which is more powerfull 
    return num+2
}
*/




