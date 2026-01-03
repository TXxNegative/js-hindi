// ++++++++ ARROW FUNCTION ++++++++

/*
const user={
    username:"abhijit",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`) // here (this) key word reffers to current context or current object inside
        console.log(this);//here this reffers to user object
    }
}

user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this); // give empty curly bracket because it is outside of any block
*/

/*
const chai= function(){
    let username="abhijit"
    console.log(this);
    console.log(this.username);//will give undefined while use inside function
    
}

chai()
*/

/*
const chai = () =>{ //ARROW FUNCTION
    let username="abhijit"
    console.log(this);// will give {}(empty curly bracket in arrow function while using(this)key word)
}

chai()
*/

/*
const addtwo = (num1,num2)=>{ // addtwo now act as a variable which store function
    return num1+num2
}
console.log(addtwo(9,4));
*/

/*
const addtwo = (num1,num2)=> num1+num2 // implicit return function(work as upper function but no need to show return key word)
console.log(addtwo(3,4));

const addtwo1 = (num1,num2)=> (num1+num2) // implicit return function(work as upper function but no need to show return key word)
console.log(addtwo1(3,4));// there is no curly braces so we don,t need to use return key word

const addtwo2 = (num1,num2)=> ({username:"abhijit"})// we need to use parenthesis to retrn object data type
console.log(addtwo2(3,4));
*/





