// "this" keyword special keyword hai, kyu ki jaise ki baki sare keywords ki value ya nature same rahata hai lekin "this" ki value badal jata hai on the basis of where we are using it. 

//this ki value different situation  mai
/*
global - window
function - window
method with es5 function - object itself
method wtih es6 arrow function - window
es5 funtion inside es5 method - window
arrow function inside es5 method - object 
event handler with function - element that we selected 
class - empty object


*/
// Global scope
console.log(this); // -> it will give window in console of webpage

//FUNCTION scope
function abc(){
    console.log(this);
}
abc()// ->it will also giove window

//object
let obj={
    name:"harsh",
    sayname:function(){
        console.log(this);  
    } //a function that is inside the object is method
}
obj.sayname() // it willl give object in console,it's value is the object itself .

// event handler
let k=document.querySelector("h1");
k.addEventListener("click",function(){
    console.log(this); //-> here "this" will represent the queryselector object itself("h1") here. 
})

let g=document.querySelector("h2")
g.addEventListener("click",function(){
    this.style.color="red"
})

//CLASS
class Abcd{
    constructor(){
        console.log("heyna");
        this.a=2
    }
}

let val=new Abcd(); // -> here when we call "this" with new keyword it will create a empty object, and here inside object there will be a=2.

//Arrow function :- here the arrow function will take the value of "this" from parent 
let obj1={
    name:"harsh",
    age:231,
    sayname:() => {
        console.log(this);  
    }
}
obj1.sayname()// it will give window in console

// function inside function
let obj2={
    name:"harsh",
    sayname:function(){
        function defg(){
            console.log(this);
        }
        defg();
    }, 
};
obj2.sayname() //here this will give window, so for function inside method we will use arrow function

//arrow function inside es5 function
let obj3={
    name:"harsh",
    sayname:function(){
        let defg = () => { 
            console.log(this);
        }
        defg()
    }, 
};
obj3.sayname()