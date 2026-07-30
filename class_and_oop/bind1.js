// call,apply,bind :- in chizo ki madad se hum function ko call karte time set kar sakte hai ki uski "this" ki value kya hogi.

let o = {
    name:"abhi"
};

function abcd(a,b,c){
    console.log(this,a,b,c);
}

abcd.call(o,1,4,5) // using call here we make the object o as "this" keyword for abcd function 

//apply :- it work same as call but here we only can send 2 arguements during calling the function, first arguement will be the object and second arguement is the array of value that we want to set in parameter of the function.

// * arguement -> the values that we give inside the bracket while calling the function.

// * parameters -> the variables inside the bracket of function defination

let g={
    name:"anup",
    age:45
}

function efgh(a,b,c){
    console.log(this,a,b,c);
}

efgh.apply(g,[2,3,4])

// bind :- it work same as "call" , but it dont run the function and create a new function whose value of "this" keyword will be obj(k).

let k={
    name:"aditya",
    age:22
}

function gg(a,b,c){
    console.log(this,a,b,c);
}

let fun = gg.bind(k,11,29,45);
fun()
