// disabeling the submit button so that the web page dont get reload

let main= document.querySelector("#main")
let form=document.querySelector("form")
let inp=document.querySelectorAll("input")

form.addEventListener("submit",function(f){
    f.preventDefault()

    console.log(inp);
    
    let card=document.createElement("div")
    card.classList.add("card")

    let profile=document.createElement("div")
    profile.classList.add("profile")

    let img=document.createElement("img")
    img.setAttribute("src",inp[0].value)
    img.setAttribute("alt","")

    let h3=document.createElement("h3")
    h3.textContent=inp[1].value
    let h5=document.createElement("h5")
    h5.textContent=inp[2].value
    let p=document.createElement("p")
    p.textContent=inp[3].value

    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)
    main.appendChild(card)

    inp.forEach(function(inp){
        if(inp.type !== "submit"){inp.value=""}
    })
})

