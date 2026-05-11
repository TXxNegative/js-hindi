/*
class user{
    constructor(email,password){
        this.email=email; // constructor set the value of email and password both , but for password the getter and setter overwrite the value of password
        this.password=password // when both constructor and setter and getter try to update the value together a new error occur(Maximum call stack size exceeded), so we create a new proparty of _password in setter and getter
    }
    get email(){
        return this._email.toLowerCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `noises ${this._password} noises` // this will return the value that we want 
    }
    set password(value){
        this._password=value// store the original value
    }
}

const hitesh= new user("Hitesh.ai","abc")
console.log(hitesh.password,'\n',hitesh.email);
*/

// OLD METHOD OF GETTER AND SETTER
/*
function user(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this,'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email=value
        }
    })
    Object.defineProperty(this,'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password=value
        }
    })
}

const chai=new user ("chai@chai.com","chai")
console.log(chai.email);
*/

// OBJECT BASED GETTER AND SETTER
const user={
    _email:"chai@chai.com",
    _password: "abc" ,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
} // rarest

const tea= Object.create(user)
console.log(tea.email);




