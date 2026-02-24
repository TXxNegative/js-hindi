/*A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

/* promise is a object, before there are no promises in js there was still asynchronous works done at that time and also fetch data from database, so vefore promises we use two preinstalled libraries in js Q and BLUEBIRD.
> now we use native promises in node js */

// promise is use with data bases to fetch,send data, etc.

/*
const promisess=new Promise(function(resolve,reject){
    //do an async task -> db calls,connect,inject,reject , cryptography, network call
    setTimeout(function(){
        console.log('async task is complete');
        resolve()//this is a method use to connect .then() with resolve.
    },1000)
})//take call back as a parameter

promisess.then(function(){// here the function get a return valuse from settimeout we useed earlier
    console.log('promise consumed');
})// .then() is directly connected to resolve
*/

/*
new Promise(function(resolve,reject){//method 2 for promise , same as upper one
    setTimeout(function(){
        console.log("async task 2");
        resolve() 
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})
*/

/*
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"abhi",email:"abhi@example.com"})// the parameter we passing here in resolve will reach in .then()
    },1000)
})
promisethree.then(function(user){// here user will get value which we passed in resolve. hence proved .then() is directly connected to the resolve()
    console.log(user);// this will print the dictionary we passing in the resolve()
})
*/

/*
const promise4=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"abhijit",password:"123"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    })
})
    //const username= promise4.then((user)=>{ // we can not assign the return value of function to the constant variable here, we have to use chain .then().
    //    console.log(user);
    //    return user.username
    //})

    console.log(username);
    

promise4
.then((user)=>{ 
    console.log(user);
    return user.username
})
.then((myusername)=>{// here we are using then chaining to store the value of previous .then().
    console.log(myusername);
})
.catch(function(error){//.catch() is directly connected to the reject parameter of the promise.
    console.log(error);
})
.finally(()=>{
    console.log("the promise is either resolved or rejected");
}) 
*/

/*
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",password:"123"})
        }
        else{
            reject('ERROR : js went wrong')
        }
    }, 1000);
})

    //async function consumepromise5(){ // async await have issue for handeling the catch. example case -> if the database dont get connected the we dont procede further.It can not handle errors directly , so we need to use trycatch 
    //    const response=await promise5// promise is a object so we dont use () like we use in function (we not going to write promise5()), AWAIT will get value from .then()(resolve) when condition is true and if the condition is false then it will get value from .catch()(reject)
    //    console.log(response);//this will give a real matchine error(code: 'ERR_UNHANDLED_REJECTION'), not our error
    //}

async function consumepromise5(){ //we use async await insted of .then(),.catch(),.finally().
    try{
        const response=await promise5
        console.log(response);
    }catch(error)
    {
        console.log(error);// this will give our error
    }
}
consumepromise5()
*/

/*
const promise6=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",password:"123"})
        }
        else{
            reject('ERROR : js went wrong')
        }
    }, 1000);
})
*/

/*
async function getallusers(){ 
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data=await response.json()//converting data type will take time so we use asynchronous method await, without await it will run but take too much time and not going to show rssult.
        console.log(data);
        
    }catch(error)
    {
        console.log("E: ",error);
    }
}
getallusers()
*/


//USE .THEN() and .CATCH() for previous data fetching

