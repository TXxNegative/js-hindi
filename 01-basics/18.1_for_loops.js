/*for (let index = 0; index < 10; index++) {
    const element = index;
    if(element%2==0) console.log(element);
}*/

/*for(let i=0; i<3; i++){
    for(let j=0; j<3 ; j++)
        console.log(` (${i},${j})`);
    console.log("\n");   
}*/

/*const arr=["flash","batman","superman"]
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}*/

/*for(let i=0; i<10 ; i++){
    const ele=i
    if(ele==5){
        console.log("we found fiveeeeee")
        break   //break the if condition and whole loop
    }
    console.log(ele);
}*/

/*for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`value of i is ${index}`);
        continue // just jump the founded value
    }
    console.log(index);
}*/

//WHILE LOOP
/*let i=0
while (i<=10) {
    console.log("yup "+i);
    i=i+2
}*/

/*const arr=['flash','batman','superman']
let i=0
while(i<arr.length){
    console.log(`value is ${arr[i]}`);
    i=i+1
}
*/

// DO WHILE LOOP 
let score=11 
do{
    console.log((`score is ${score}`)); //this will print 11 still if there is range is less than 10 because this loop will run the task first then check the condition
    score++
}
while(score<=10)// will print 11 still if 11>10

