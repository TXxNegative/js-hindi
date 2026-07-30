//function scope= function ke andar hi use ho sakte hai
//global scope= ppore code mein kahi bhi use ho sakte hai
//block scope={} curly braces mai hi use ho sakte hai, except function curly  bracket , ex:- if{}

//execution content :-js sabse pahale jaise hi function dekhta hai sabse pahale js execution context(hypothetical/abstract box/space with some memory) banata hai, js allocate karta hai some space to the function, ye eak process hai jo ki do different phases mai chalta hai, memory allocation phase and execution phase .

//lexical scoping (js only have lexical scoping)= aap jaha par physically available ho wahi ke chize aap access kar sakte ho
function abcd(){
    let g=34;
    function h(){ // for this function it can access g because both are inside same class
        console.log(g);
    }
}

//dynamic scoping = kaha se call kar rahe ho uspe depend karta hai ki kya value milega ( NOT IN JS )
let a=12
function abcd(){
    console.log((a));   // if js was dynamically scoped then the abcd function fetch the data of a from function defg by its own.

    //since JS is lexically scoped therefore the value of a is 12
}

function defg(){
    let a=13;
    abcd();
}

defg()