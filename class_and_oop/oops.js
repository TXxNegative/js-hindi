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


