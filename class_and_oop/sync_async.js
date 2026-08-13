//koi bhi code js mai line by line chalta hai aur ye natural pattern hai ki code line by line chale. but kabi kahi aisa cse ata hai lie mai jaha par aapko code wait karata hai and utni der mai agla code chal jata hai.

//aisa code jo line by line chale hota hai sync code 
// aisa code jo chalne ke liye ready ho jay tab chale wo hai asynchronous

/*
function kuchderbaadchalunga(val){
    setTimeout(val,Math.floor((Math.random()*10))*1000);
}
kuchderbaadchalunga(function(){console.log("nigger");});//agar hm function ko dusre function ke call ke time parameter me send karte hai use call back kahate hai
*/

// call back hell

function profilelekeaao(username,cb){
    console.log("fetching profile data...");
    
    setTimeout(()=>{
        cb({_id:121121, username,age:26,email:"abhi@gamil.com"})
    },2000)
}

function sarepostlekaraao(id,cb){
    console.log("fetching all data...");
    setTimeout(()=>{
        cb({_id:id,postes:["hey","mf","nigga"]})
    },3000)
}

function savepostsnikaloo(id,cb){
    console.log("fatching saved posts....");
    
    setTimeout(()=>{
        cb({_id:id,saved:[1,2,3,4,5,6]})
    },3000)
}
profilelekeaao("abhijit",function(data){
    console.log(data);
    sarepostlekaraao(data._id,function(posts){
        console.log(posts);
        savepostsnikaloo(data._id,function(saved){
        console.log(saved);
        })
    });  
});