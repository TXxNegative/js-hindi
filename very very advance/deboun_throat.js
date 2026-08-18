//debouncing -> aap koi action kar rahe ho and aap ye nahi chaate har action pe kuch ho,jab bhi mera action mai koi specific gap aa jaye to fir reaction perform ho
/*
function debounce(fnc,delay){
    let timer;
    return function(args){
        clearTimeout(timer);
        timer=setTimeout(function(){
            fnc(args);
        },delay)
    }
}

document.querySelector("#i1").addEventListener("input",debounce(function(){console.log("hey");
},1000))//here the delay time is the time when the function will run after you just complete the event.
*/

//throttle -> interval par chalaunga,action agar hota raha and aapne ek interval bataya to utna interval me aapke event chalega 

function throtal(fun,delay){
    let timer =0;
    return function (args){
        let now1 =Date.now();
        if(now1-timer >= delay){
            timer=now1;
            fun(args);
        }
    }
}

document.querySelector("#i2").addEventListener("input",throtal(function(){console.log("chalte raho .....");},1000))
