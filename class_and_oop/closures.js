// closures aise function hote hai jo ki kisi parent function ke andar ho aur andar wale function return ho rahe ho ,and returning function use kare, parent function ka koi variable

// advantage :- private variables, stop global polution

//it is true ki function khtam hone par function and uske variables bhi closure banta hai to function and uska variable ka ek backlink banaya jaata hai aur uska naam hota hai [[environment]]
function f(){
    let a=12;
    return function(){ //function will clear here(remove he function from storage)
        console.log(a);
    }
}
let g=f()
g

// usecase of closures:- private counters,encapsulation
//1. private counter
function countforme(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    };
}

let fnc=countforme();
fnc();
fnc();
fnc();


let fnc2=countforme();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();

//2. encapsulation :- only give access the part that reqired

//here as the function got backlinked a copy of click variable get created through backlink which is global and get edited
function clicklimiter(){
    let click=0
    return function(){
        
        if(click<5){
            click++;
            console.log(`clicked ${click} times`);
            
        }
        else{
            console.error("limit exceeded, try after some time");
            
        }
    }
}

let fun=clicklimiter();
fun();
fun();
fun();
fun();
fun();
fun();
fun();











