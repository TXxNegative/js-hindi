/*
// if any div dont have any eventlistner in it and if we do some event on it then the event will go to the parent of the current div for eventlistner. this will go upward untill found any eventlistner.

let grandfa=document.querySelector("#grandfa")
grandfa.addEventListener("click",function(){
    alert("button dont have any eventlistner so grandfathers eventlistner is being used")
})
*/

// using toggle : it is use with classlist. if there is some class with the same name the remove the class and if there is no class then add the class
let ul=document.querySelector("ul")
ul.addEventListener("click",function(dets){
    dets.target.classList.toggle("lt")
    console.log(dets);
    
})
