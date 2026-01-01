
/*function saymyname(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

saymyname() //calling a function
saymyname //return nothing wrong
*/
/*function addtwonum(num1,num2){ //num1,num2 are parameters
    console.log(num1+num2)
}

addtwonum(9,-6)// 9,-6 are arguements
addtwonum(3,"aa")
addtwonum(4,null)
const dj=addtwonum(4,5)//here we calling the function so 9 will print
console.log(dj)//here we didn't return anything from function so nothing will print

function addtwonum2(num1,num2){ //num1,num2 are parameters
    let result=(num1+num2)// we can also direct return (num1+num2) insted of let a variable then assign it to return
    return result//here result variable is local scope, only available inside addtwonum2 function
    console.log("hitesh");//after return nthing will execute in the function
    
}
console.log(addtwonum2(9,-6))// 9,-6 are arguements
console.log(addtwonum2(3,"aa"))
console.log(addtwonum2(4,null))
const result=addtwonum2(4,5)// here result variable is global scope
console.log(result)
*/

/*function loginusermsg(username){
    return `${username} just logged in`
}
console.log(loginusermsg("hitesh"));
console.log(loginusermsg());// give undefined in place of value

function loginusermsg1(username){
    if(!username){//username===undefined
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginusermsg1());

function loginusermsg2(username="sam"){
    return `${username} just logged in`
}
console.log(loginusermsg2("hitesh"));//here arguement will be priortised than defined parameter of the function so it will print "hitesh"
*/

/******shopping cart situation(when we don't know the number of arguement user will pass durin the calling of the function) *********/

/*function calculatecartprice(num1) {
    return num1
}
console.log(calculatecartprice(200,300,400,500))//only give first value as output

function calculatecartprice1(...num1) {//(...)here three dots work as rest operator
    return num1
}
console.log(calculatecartprice1(200,300,400,500))//all the value print inside a array

function calculatecartprice2(val1,val2,...num1) {//(...)here three dots work as rest operator
    return num1
}
console.log(calculatecartprice2(200,300,400,500))//first two arguements will assign to the first two variables, then rest will stor in num1 in list form

function calculatecartprice3(...num1) {//(...)here three dots work as rest operator
    return val1,val2// return only the last value we give
}
console.log(calculatecartprice3(200,300,400,500))
*/

/*const user ={
    username:"hitesh",
    price:199
}
function handleobj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}

handleobj(user)      // object as arguement
handleobj({          // direct object as arguement
    username:"abhijit",
    price:500
})

const return2nd=[100,200,300,400,500]
function ufo(getval){
    return getval[1]
}
console.log(ufo(return2nd));// array as arguement
*/
