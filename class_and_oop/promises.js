//PROMISES

//aap eak promise banate ho jo ki do state main se eak state mai ja sakte hai and wo yaa to resolve hoga ya to reject hoga ab wo kya hoga ye to waqt batayega par hamein dono ke liye code likhna padta hai

//promise have three states pending,fullfiled(resolve),rejected(rejected)
let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10)
        if(rn>5) res("resolved with " + rn);
        else rej("reject with " + rn)
    },3000)
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
    
})

