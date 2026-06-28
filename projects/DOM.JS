let h2=document.createElement("h2")
h2.textContent="hello nigga"// it is fater than innertext and also edit the text inside hidden html tag
document.querySelector("body").prepend(h2)//add element at the start
document.querySelector("div").append(" you nigga")
let p=document.querySelector("p")
p.innerHTML="<b>uphoria</b>"
let img=document.querySelector("img")
console.log(img.src);
console.log(img.getAttribute("src"));
document.querySelector("img").setAttribute("src","https://images.unsplash.com/photo-1782313809673-c106aeb7b3a9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D")
document.querySelector("img").setAttribute("height","200")
document.querySelector("a").setAttribute("href","https://www.google.com/")
