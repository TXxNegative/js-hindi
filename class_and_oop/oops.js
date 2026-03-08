const user={
    username:"abhijit",
    logincount:8,
    signedin:true,

    getuserdetails: function(){
        console.log(`username:${this.username}`);
        console.log(this);
        
    }
}

console.log(user.getuserdetails());

function userss(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}

const userone=userss("hitesh",12,true)
const usertwo=userss("chai",19,false)
console.log(userone);//it will show value of usertwo because the value of usertwo will overwrite the value of userone

const user1one=new userss("hitesh",12,true)// new call constructor function ,constructor function pack all the arguements in it meaning all the this arguements get inject inside the object. 

const user2two=new userss("chai",19,false)//when we use new first a object is created it is also known as instance.
console.log(userone.constructor);// this will give the function:object

