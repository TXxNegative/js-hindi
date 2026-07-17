// keydown : using this function in addeeventlistner we can give input direct to the window without input tag
let h1=document.querySelector("h1")
window.addEventListener("keydown",function(ke){
    //console.log(ke); it will give the keyboard event dictionary we did
    console.log(ke.key);//this will give only the key value of the keyboard event dictionary
    if(ke.key === " "){h1.textContent="spc"}
    else{h1.textContent=ke.key}
})



