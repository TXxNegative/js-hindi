//IF 
//(<,>,<=.>=,==,!=,===,!==) comparision operators
/*
const isuserloggedin= true
if (isuserloggedin != 0) {
    console.log("yo yo");
}
*/
/*
if(2=="2"){
    console.log("executed");
}
if(2==="2"){ //strict compare(compare very deep upto data type)
    console.log("executed");
}
*/
/*
const temp=41
if(temp===41){
    console.log("less than 50");
}
else{
    console.log("temp is greater than 50");
}
console.log("executed");
*/
/*
const score=200
if (score>100) {
    const power="fly"
    console.log(`user power : ${power}`);
}
console.log(`user power : ${power}`);// power is a local scope variable so this line will give error
*/  
/* 
const balance=1000
if(balance>500) console.log("test");//shorthand if
*/ 

//else if
/*const balance=1000
if (balance<500){
    console.log("less than 500");
}
else if(balance <750){
    console.log("less than 750");
}
else if(balance <900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}*/

/*
const userloggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if (userloggedin && debitcard) { // logical (&&) and operator
    console.log("allow to buy course");
}

if(loggedinfromgoogle || loggedinfromemail){ // logical (||) or opperator
    console.log("user logged in");
}
*/

// NULLISH COALEASCING OPERATOR(??): (use specificly for trminate null and undefined to assign )
/*
let val1;
//val1=5 ?? 10 //give 5
//val1=null ?? 10 //store 10 rather than null
//val1 = undefined ?? 15 //store 15 rather than undefined
val1=null ?? 10 ??15// after null the first value will be assign
console.log(val1);
*/


//TERNIARY OPERATOR(direct compare the values of variables)(?)
const iceteaprice=100
iceteaprice <=80 ? console.log("less than 80"):console.log("more than 80");



