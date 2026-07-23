//local storage -> it is database of the browser . it store data data within browser , which cant be delete still after close the browser. it can store up to 5Mb data.normalyy on local storage we can oly store data in string format , if we try to store other data type the browser autometically change the type of data to string. but after fetching the string data in console if we use JSON.parse () the we will get the original datatype file on he console.
//to do-> localStorage -> data store,fetch,remove,update

localStorage.setItem("name","abhi"); // store data
localStorage.setItem("age","34")
let age=localStorage.getItem("age");//fetch data
localStorage.removeItem("name")//remove data
localStorage.setItem("age","22")//update data

localStorage.setItem("names",JSON.stringify(["aditya","anuj","amrit"]))
let gg=JSON.parse(localStorage.getItem("names"))
console.log(gg);

//session storage -> it store data temporarily, once browser closed data also erased. it can store up to 5Mb data.

sessionStorage.setItem("name","dutta")//set data
sessionStorage.setItem("age","45")
let sage=sessionStorage.getItem("age")//fetch data
sessionStorage.removeItem("name")//remove data
sessionStorage.setItem("age","55")// update data

//cookies -> it also store data inside browser but in very less quantity. data stored inside the browser with the proparty of cookie name.it can store up to 4Kb data.



