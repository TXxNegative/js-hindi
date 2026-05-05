//change the values of universal costants like pi here

/*
console.log(Math.PI);
Math.PI=5// it will do nothing
console.log(Math.PI);
*/

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")// Object.getOwnPropertyDescriptor() it will give the proparty of the function of a object, not the proparty of the object.
console.log(descripter); //{value: 3.141592653589793, writable: false, enumerable: false, configurable: false} proparties of math.pi

// creating a object with function which have proparty given by user

const chai={
    name: "ginger chai",
    price:250,
    isavailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

chai.name="abhijit"// dont change the value of name in object chai 
console.log(chai.name);



