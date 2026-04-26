function setusername(username){
    //complex DB calls
    this.username=username
    console.log("called");
}

function createuser(username,email,password){
    //setusername(username)// here we giving referance we are not calling it .
    setusername.call(this,username)//here the 'this' object here is of function setusername.

    this.email=email
    this.password=password
}

const chai=new createuser("chai","abhi@gmail.com","123")
console.log(chai);
