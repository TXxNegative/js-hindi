const colorbox=document.querySelectorAll('.colorbox')
const body=document.querySelector("body")
const q2=document.querySelector('#q2')
colorbox.forEach(function(colorbox){
    console.log(colorbox);
    colorbox.addEventListener('click',function(e){
        console.log(`value of e is${e}`);
        console.log(e);
        
        console.log(`value of e.target is${e.target}`);
        console.log(e.target);
        
        if(e.target.id==='pink') {
            body.style.backgroundColor=e.target.id;
            q2.style.backgroundColor=e.target.id;
        }
        else if(e.target.id === 'plum'){
            q2.style.backgroundColor=e.target.id;
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id === 'bisque'){
            q2.style.backgroundColor=e.target.id;
            body.style.backgroundColor=e.target.id;
        } 
        else if(e.target.id === 'paleturquoise'){
            q2.style.backgroundColor=e.target.id;
            body.style.backgroundColor=e.target.id;
        }  
    })
})