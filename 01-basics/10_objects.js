// singleton (object by constructor)

const tindername={
    email:"abhi@gmail.com",
    biodata:{
        fullname:{
            firstname:"abhijit",
            lastname:"dutta"
        }
    }
}//defining a object method 1
/*console.log(tindername.biodata.fullname.firstname);
const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"d",
    5:"e"
}*/
//const obj3=Object.assign({},obj1,obj2)//use this method to concatanate the two object(a single object have key and value of those two objects)
//console.log(obj3);
/*const obj3={...obj1,...obj2};
console.log(obj3);*/

const user =[
    {
        id:1,
        email : "abhijitdutta2019navy@gmail.com"
    },
    {
        id:2,
        email : "abhijitdutta2020navy@gmail.com"
    },
    {
        id:3,
        email : "physicsevil007@gmail.com"
    }
]
console.log(user[1].email);


/*const tinderuser=new Object() //defining a object method 2

tinderuser.id="7278@abhi"
tinderuser.name="abhijit"
tinderuser.isloggedin=false

console.log(tinderuser);*/


//object literals

/*const mysym=Symbol("key1")

const jsuser={
    name:"abhijit",
    "Full name":"abhijit dutta",
    [mysym]:"mykey2",
    age:21,
    location:"kolkata",
    email:"physicsevil007@gmail.com",
    isloggedin:false,
    lastloggedindays:["monday","sunday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);

console.log(jsuser["Full name"]);//specificly for this type of key
console.log(jsuser[mysym]);//specificly for this type of data type (key)
jsuser.email="abhijitdutta2020navy@gmail.com"

//Object.freeze(jsuser)
jsuser.email="abhijitdutta2021navy@gmail.com"
//console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello user");
}
jsuser.greetingtwo=function(){
    console.log(`hello user youre name is ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
*/


