//date
/*let  myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.toISOString()); // Get the year
console.log(myDate.toDateString()); // Get the date
console.log(myDate.getFullYear()); // Get the year
console.log(myDate.toLocaleString()); // Get the month (0-11)
console.log( typeof myDate); // Check the type of myDate


let mycreatedDate = new Date(2025,0,23);
let myowndate=new Date("05-02-2025");
console.log(mycreatedDate.toDateString()); // Specific date
console.log(mycreatedDate.toLocaleString()); // Get the year of specific date
console.log(myowndate.toDateString()); // Specific date from string
console.log(myowndate.toLocaleString()); // Get the year of specific date from string*/

/*let mytimestamp= Date.now();
console.log(mytimestamp); // Get the timestamp in milliseconds since 1970-01-01T00:00:00Z
console.log(mycreatedDate.getTime()); // Get the timestamp of a specific date
console.log(Math.floor(mytimestamp/1000)); // Get the timestamp in seconds*/

let dater=new Date()
console.log(dater);
console.log(dater.getMonth());
console.log(dater.getDate());

of=dater.toLocaleString('default',{
    weekday: "long"
})

console.log(of);









