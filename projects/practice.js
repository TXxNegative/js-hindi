let body=document.querySelector("body")
body.style.backgroundColor="black"
body.style.color="white"
let d1=document.createElement("div")
d1.setAttribute("id","hi")
d1.innerText="hello"
body.appendChild(d1)
let ul1=document.createElement("ul")
d1.appendChild(ul1)
for(let i=0;i<12;i++){
    let li1=document.createElement("li")
    li1.setAttribute("id",i);
    if(i%2==0){li1.classList.add("highlight") //another method for selecting list elements of HTML which are at even position [let li=document.queryselectorall("ul li:nth-child(2n)")]
        li1.style.backgroundColor="green"
    }
    li1.innerText="hello "+i
    ul1.appendChild(li1)
}
// set the font size of all <p> element to 12px using function
let p=document.querySelectorAll("p")
p.forEach(function(elem){
    elem.style.fontSize="12px"
});
