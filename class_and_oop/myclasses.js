class user{
    constructor(username,email,password){  
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changename(g){
        return `${this.username.toUpperCase()} ${g}`
    }
}
const chai=new user("chai","chai@gmail.com","123")
console.log(chai.encryptpassword());
console.log(chai.changename("hallo"));

// behind the scene using prototyping 
// this show that the function can also act like an class 
function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

user.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
user.prototype.changename=function(g){
    return `${this.username.toUpperCase()} ${g}`
}

const tea=new user("chai","chai@gmail.com","123")
console.log(tea.encryptpassword());
console.log(tea.changename("52 gaj"));