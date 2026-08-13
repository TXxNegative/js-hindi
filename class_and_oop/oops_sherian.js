//ops me hame seekhna hai factories banana, matlab ki aap eak barblueprint bana do ki har object kaise dikhega and hum log naya naya object with differeent vallues bana payenge.

function createbiscuits(name,price,qut,company,catagory){
    this.name=name
    this.price=price
    this.qut=qut
    this.company=company
    this.catagort=catagory
}

let biscuit1 = new createbiscuits("oreo",10,5,"cadbuery","biscuit");
let biscuit2 = new createbiscuits("fantasy",20,3,"parle","cream pi")

// using new hum log naya object bana rahe hai  so object ke andar this ka value empty object hota hai.

function Createpencil(name,price,color){ // it is called constructor function, whose fist letter is capital
    this.name=name;
    this.price=price;
    this.color=color;
    //this.company="doms"; //when we use "new" every time company will take space every time,but when we use prototype then all "new" will share the space  
    /*this.write=function(text){
        let h1=document.createElement("h1")
        h1.textContent=text;
        h1.style.color=color
        document.body.append(h1)
    }*/
}

Createpencil.prototype.company="doms"
Createpencil.prototype.write=function(text){
        let h1=document.createElement("h1")
        h1.textContent=text;
        h1.style.color=this.color
        document.body.append(h1)
    }
//agar tumhara constructor function koi field apna prototype par attach kar le to us constructor se banne wale sabhi new instances yani ki objects, ke paas wo field automatically chali jati hai

let pencil1=new Createpencil("nataraj",10,"red")
let pencil2=new Createpencil("tetra",10,"green")








