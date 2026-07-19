// disabeling the submit button so that the web page dont get reload

let form=document.querySelector("form")
let ans=document.querySelectorAll("input")


form.addEventListener("submit",function(f){
    f.preventDefault()

    console.log(ans[0].value,
        ans[1].value,
        ans[2].value,
        ans[3].value,
        ans[4].value);
    
})

