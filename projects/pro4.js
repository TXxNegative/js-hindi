const clock=document.getElementById('clock')
///const clock=document.querySelector('#clock') /// both will give same value

setInterval(function(){ // it is the basic method to change and show change in any value within the time
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString();
},1000);