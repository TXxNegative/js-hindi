// masking a bad lookking upload input button
let fileinp=document.querySelector("#fileinp")
let btn=document.querySelector("#btn")
let val=document.querySelector("#val")

btn.addEventListener("click",function(){
    fileinp.click()//it will transfer the event to the fileinp tag function
})
fileinp.addEventListener("change",function(k){
    console.log(k);  
    const file =  k.target.files[0]
    if (file){
        btn.textcontent=file.name
    }
})
