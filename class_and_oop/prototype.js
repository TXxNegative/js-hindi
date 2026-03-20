let myname="hitesh        "

//console.log(myname.trim().length); noobs way to print the nmber of char in a character

let myhero=["thor","spiderman"]
let heropower={
    thor : "hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){ //if we use prototype with the object then every object,array,function,string have hitesh as a property in them.
// but if we use prototype with function or string or array individually then the data type of the protype only can use the proparty, not other data type.
    console.log('hitesh is present in all subjects');
}

myhero.hitesh()
//heropower.hitesh()

const user={
    name:"chai",
    email:"mp@gmail.com"
}
const teacher={
    makevideo:true
}

const teachersupport={
    isavailable:false
}

const tasupport={
    makeassignment:"js assignment",
    fulltime:true,
    __proto__:teachersupport// it is a old method to access proparties of other objcts
}

teacher.__proto__=user//old method of accessing other object proparties.

//moddern method ofinheritance(__proto__)
Object.setPrototypeOf(teachersupport,teacher)

let anotherusername="chaiaurcode     "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.length}`);
    console.log(`true length is${this.trim().length}`);
}

anotherusername.truelength()// here we use function as a property of string so we can use with any string.

"hitesh".truelength()
"icetea".truelength()



