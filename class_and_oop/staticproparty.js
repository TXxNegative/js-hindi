class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username: ${this.username}`);
        
    }
    static createid(){ // static is use to give access to only specific users not all users, it is a private functio
        return `123`
    }
}

const hitesh = new user("hitesh")
//console.log(hitesh.createid()); // it will give error because the function we want to access is private

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new teacher("iphone","i@phone.com")
console.log(iphone.createid());// it will give error because the function we want to access is private and we can't access the private functikn uing inheritance proparty of function
