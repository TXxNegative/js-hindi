// FOREACH(["","",""]),([{},{},{}])

const coding=['js','ruby','java','python','cpp']

/*coding.forEach( function (item) { //here item reffers to coding array(function automatically do it),no need to give function name
    console.log(item);
})

coding.forEach((item)=>{ //work same as befor function
    console.log(item);
}) //arrow function but dont need to name the function

function printme(item){
    console.log(item);
}
coding.forEach(printme)// here we not calling the function , we are just use the reference of the function
*/

/*coding.forEach((item,index,arr)=>{ // forEach function of array also return full array and index position of the element with element
    console.log(item,index,arr); 
})*/

const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]

mycoding.forEach((item) => {
    console.log(item);//return objects inside the array
    console.log(item.languagename);  //return values of a property
})

