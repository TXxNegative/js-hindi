//event capturing: if ther are multi div one inside one the the child node event first occur then,fathers event also occur then it it will go on the ultimate parent div and run its event also
/*
<div id="1">//at last this div event will be run
    <div id="2">//after completing event in "3" div this div will run
        <div id="3"> //if there is any event then this event will occur first
        </div>
    </div>
</div>
*/
let grandfa=document.querySelector("#grandfa")
let fa=document.querySelector("#fa")
let son=document.querySelector("#son")
let but=document.querySelector("#button")

grandfa.addEventListener("click",function(){
    console.log("grandfa");
})

fa.addEventListener("click",function(){
    console.log("fa");
})

son.addEventListener("click",function(){
    console.log("son");
})

but.addEventListener("click",function(){
    console.log("buton");
})
