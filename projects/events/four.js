let p=document.querySelector("p")
p.addEventListener("click",function(fi){
    p.style.color="aquamarine"
    console.log(fi.data);
    
});

let inp=document.querySelector("input")
inp.addEventListener("input",function(dat){ //here the argument of the function 'dat' will save the actions we are doing using keyboard and mouse
    if(dat.data !== null && dat.data !== " " ){
        console.log(dat.data);
    }
})

//change event : when we select any option from dropdown menue then the text will change
let divi=document.querySelector("#divice")
let sel=document.querySelector("select")
sel.addEventListener("change",function(s){
    divi.textContent=`${s.target.value} device selected`
})

