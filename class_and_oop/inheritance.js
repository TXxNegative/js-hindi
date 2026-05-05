class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)// IT WILL reffer to extended class(user) then go to user and work with this
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}

const chai= new teacher("chai","abhi@123gmail.com","123")
chai.addcourse()
chai.logme()// (teacher)  is a child class here so it can use the function of the parent class (user)
const masalachai = new user("masalachai")
//masalachai.addcourse()// it will give error because user can not access the function of teaher
//masalachai.logme()

console.log(chai===masalachai);
console.log(chai instanceof teacher);//true
console.log(chai instanceof user);//true