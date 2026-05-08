class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this.password.toUpperCase()
    }
    set password(value){
        this.password=value.toUpperCase()
    }
}

consthitesh= new user("hitesh.ai","123")
console.log(hitesh.password);
