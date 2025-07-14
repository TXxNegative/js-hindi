// MEMORY //
// stack memory (prmitive) -> if we do any changes in the value then it will be chanhege in the copy of that variable, not in ,main variable
// heap memory (non premitive) -> if we edit the value of the object then it will change the main value of the object , not in the copy

// ********** STRINGS ************* //
// string can be denoted by  both ("",'')

const val=34
const run=90

const name="hope"

console.log(val+run+name);
console.log(name+val+run);

console.log(name+run+"value");//older and bad way to inject int type value between a string

//string intrpolation(using backtricks (``))
console.log(`hello my age is ${val} and my name is ${name}`);//string interpolation

const gamename = new String("TX-nxnegative");
console.log(gamename[9]);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('e'));

const subStr= gamename.substring(0,4)
const subStr1= gamename.substring(4)
console.log(subStr);
console.log(subStr1);

const StrSlice= gamename.slice(-10,3)
console.log(StrSlice);

const newstr="   hi   "
console.log(newstr)
console.log(newstr.trim());

const url= "https://abhijit.com/abhijit%20dutta"
console.log(url.replace("%20","-"))

console.log(url.includes("nigga"));//check if the value is present in the string or not, if not then return false, if present then return true

console.log(gamename.split('-'));//return a  list where elements are the left and right string of the ("-")







