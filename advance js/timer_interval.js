/*
// let x = setInterval(function(){},(time in milli second)) //-> it run multiple times after activate. it run the program which we write inside function.
let inn=document.querySelector("#inn")
let on=document.querySelector("#on")
let but=document.querySelector("#but")

let si=0

on.addEventListener("click",function(){
    if(si===0){
        si=setInterval(function(){
        inn.classList.toggle("bi")
        console.log("hello");
        },500)
    }
    
})

//clearInterval(x) //-> remove the interval of any operation, nd stop the operation permanently

but.addEventListener("click",function(){
    clearInterval(si)
    si=0
    console.log("stopped");
})
*/

/*
let msg = document.querySelector("#msg");

let si = setInterval(function () {
    msg.style.display = "none";
    clearInterval(si);
}, 3000);
*/

//let y = setTimeout(function(){},(time in milli second)) //->it will only run once

//clearTimeout(y) //->remove the timeout of any operation, and stop the operation permanently




