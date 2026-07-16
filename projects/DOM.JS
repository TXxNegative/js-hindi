import { createElement } from "react"

let h2=document.createElement("h2")
h2.textContent="hello nigga"// it is fater than innertext and also edit the text inside hidden html tag
let pr=document.querySelector("body")
pr.prepend(h2)//add element at the start
let ap=document.querySelector("div")
ap.append(" you nigga")
let p=document.querySelector("p")
p.innerHTML="<b>uphoria</b>"
let img=document.querySelector("img")
console.log(img.src);
console.log(img.getAttribute("src"));
let im=document.querySelector("img")
im.setAttribute("src","https://images.unsplash.com/photo-1782313809673-c106aeb7b3a9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D")
im.setAttribute("id","beautifull")
let sa=document.querySelector("#beautiful")
sa.setAttribute("height","200")
let sa2=document.querySelector("a")
sa2.setAttribute("href","https://www.google.com/")
let a=document.querySelector("#ok")
a.setAttribute("title","some info")
a.appendChild(im)
console.dir(a)

let ra=document.querySelector("button")
ra.removeAttribute("disabled") 
//adding a new list element at the end of the list
let ul=document.querySelector("ul")
let li=document.createElement("li")
li.innerText="hell"
ul.appendChild(li) 
//
let d=document.querySelector("#go")
let i=document.createElement("img")
i.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFpNMYcP9QIDKgoxZxrFlUKMr7pb_zecgXqE-U0mTDWpgaN7DbcpK1YjE&s=10")
i.setAttribute("id","place")
i.classList.add("placeholder")// add class to the element , if there is already a class then do nothing , but if we use (i.classlist.toggle()) it will replace the ld class with the new one.
d.prepend("i")
//remove first element from the list
ul.removeChild("li")
let hi=document.querySelector("#hi")
let ul3=document.createElement("ul")
hi.appendChild(ul3)
let li3=document.createElement("li")
li3.innerText="koria"
ul3.appendChild(li3)

