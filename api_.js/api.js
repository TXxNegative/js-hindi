fetch("https://randomuser.me/api/")
.then((rawdata)=>{
    return rawdata.json();
})
.then((data)=>{
    console.log(data.results[0].name.first);
})
.catch((err)=>{
    console.log(err);
    
})

//or

fetch("https://randomuser.me/api/")
.then((rawdata1)=> rawdata1.json())//implecete return
.then((data3)=> console.log(data3.results[0].name.first))
.catch((err)=>console.log(err))


//for multiple api
fetch("https://randomuser.me/api/?results=5")
.then((data1)=>data1.json())
.then((data2)=>console.log(data2.results))




