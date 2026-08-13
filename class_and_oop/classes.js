/*class Createpencil{
    constructor(name,company,price, color){
        this.name=name;
        this.company=company;
        this.price=price;
        this.color=color;
    }
    erase(){
        document.body.querySelectorAll("h1").forEach((elem)=>{
            if(elem.style.color===this.color){
            elem.remove()
            }})
    }
    write (text){
        let h1=document.createElement("h1")
        h1.textContent=text;
        h1.style.color=this.color
        document.body.appendChild(h1)
    }
}

let p1=new Createpencil("nataraj","nataraj",10,"red")
let p2=new Createpencil("doms","doms",20,"blue")
*/

//INHERITANCE

//classical inheritance
/*class User{
    constructor(name,add,username,email){
        this.name=name;
        this.add=add;
        this.username=username;
        this.email=email;
        this.role="user";
    }
    
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=`${this.name} : ${text} `;
        document.body.appendChild(h1)
    }
    
    chekrole(){
        console.log(`you are currently ${this.role}`);
    }
}

class Admin extends User{
    constructor(name,add,username,email){
        super(name,add,username,email)
        this.role="admin"
    }
    remove(){
        document.querySelectorAll("h1").forEach((elem)=>{
            elem.remove();
        })
    }
}

let u1=new User("AAbhijit","kolkata","negative","abhi@1123")
let u2=new User('harshita',"pune","positive","eggh")
let a1=new Admin("admin","india","addddddmin","a@a")
*/

//prototype inheritance (only in js)