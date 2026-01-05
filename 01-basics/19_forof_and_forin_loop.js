// for of loop
/*const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting="hello world"// TASK : print the position of the l in the string while l come during loop rather than l
for (const cha of greeting) {
    if(cha=='l'){
        continue
    }
    console.log(`each char is ${cha}`);
}*/
//task 2: there is forin loop also to cheeck and use

//MAPS(no duplicate values)(DATA TYEP)(remember the flow of data entry)
// (maps are non itterable)

/*const map=new Map()
map.set(1,'kolkata')
map.set(2,'mumbai')
map.set(3,'delhi')

//console.log(map);

for(const key of map){ // return a list of key and value pair[key,value] but insqare brackets also will print
    console.log(key);
}

for(const[key,value] of map){ //return normal like string structur key :- value
    console.log(key,':-',value);
}
*/

//forin in object
/*const obj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in obj) {
    console.log(key,":",obj[key]);
}*/

//forin in arrray
/*const programming=['js','rb','py','java','cpp']
for(const key in programming){
    console.log(key);// return keys(index) of array
    console.log(programming[key]);// return values in array
    
}*/

//forin in MAP
const map=new Map()
map.set(1,'kolkata')
map.set(2,'mumbai')
map.set(3,'delhi')

for(const key in map){ 
    console.log(key);// dont return anything 
}