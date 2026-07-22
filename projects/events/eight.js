//mouse over & mouse move & mousemove

let ab=document.querySelector("#ab")

window.addEventListener("mousemove",function(m){
    //console.log(m.clientX,m.clientY);
    
    ab.style.top=(m.clientY-50)+"px";
    ab.style.left=(m.clientX-50)+"px";
})

//for hovering coloer change effect
/*
ab.addEventListener("mouseover",function(dets){ // if we only use the mouseovr event then after moving the cursor out of the div dont go back to previous color, it will be fix, so we need to use mouseout.
    ab.style.backgroundColor="antiquewhite"
})

ab.addEventListener("mouseout",function(){
    ab.style.backgroundColor="antiquewhite"
})

*/