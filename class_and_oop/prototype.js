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

Object.prototype.hitesh=function(){
    console.log('hitesh is present in all subjects');
}

myhero.hitesh()
//heropower.hitesh()



