//mouse over & mouse move
let ab=document.querySelector("#ab") 
ab.addEventListener("mouseover",function(dets){ // if we only use the mouseovr event then after moving the cursor out of the div dont go back to previous color, it will be fix, so we need to use mouseout.
    ab.style.backgroundColor="bisque"
})

ab.addEventListener("mouseout",function(){
    ab.style.backgroundColor="antiquewhite"
})