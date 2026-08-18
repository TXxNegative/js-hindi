//MODULE PATTERN    

//module pattern eak design hai jime hum apne code ek self execution function (IIFE) ke andar likhte hai ,taki variable aur function private rahain

//iske andar se hum sirf wahi cheezein return karte hai jo bahar use karni hai

//is pattern ka main fayda ye hai data hiding (encapsulation) air clean structure , taki code secure, reuseable aur manageable ban sake.

let fnc=(function (){
    return 12
})();//immediately invoked function expression -> calling function immediately

//IIFE
/*
let bank=(function (){
    let bankbalance=120000;
    function checkbalance(){
        console.log(bankbalance);
        
    }
    function setbalance(val){
        bankbalance=val;
    }
    function withdraw(val){
        if(val<=bankbalance){
            bankbalance -= val
            console.log(bankbalance);
        }
    }
    return{checkbalance,setbalance,withdraw};
})();

bank.checkbalance()
bank.setbalance(130000)
bank.checkbalance()
*/

//REVEALING MODULE PATTERN -> same as module pattern but there the function have different name while returning the function
/*
let bank=(function (){
    let bankbalance=120000;
    function checkbalance(){
        console.log(bankbalance);
        
    }
    function setbalance(val){
        bankbalance=val;
    }
    function withdraw(val){
        if(val<=bankbalance){
            bankbalance -= val
            console.log(bankbalance);
        }
    }
    return{check:checkbalance,
        set:setbalance,
        with:withdraw};
})();
*/
//FACTORY FUNCTION PATTERN
//1. eak function banate ho jo objects create karte hai (factory = object banane ki machine)

//2. factory function pattern ek aisa design pattern hai jisme hum ek simple function likht hai jo naya object banakar return karte hai, bina class ya new keyword use kiye.

//3. is pattern ka main idea hai -> object creation ko eak function ke through control karna.

//4. har bar jab tum factory function call karte ho , tumhe eak naya object milta hai jisme apne methods aur (agar caho to) private data ho sakta hai.
/*
function createproduct(name,price){
    let stock = 10;
    return {
        name,
        price,
        checkstock(){
            console.log(stock);
        },
        buy(qty){
            if(qty<=stock){
                stock -= qty;
                console.log((`${qty}booked & ${stock} piecces left`));   
            }
            else{
                console.error("we dont have these many pieces currently")
            }
        },
        refill(qty){
            stock=stock+qty;
            console.log(`refill the stock ${stock} pieces now`);
        }
    }
}

let p1=createproduct("ihone",89000);
p1.buy(3)
console.log(p1.checkstock());

let p2=createproduct("samsong",100000);
p2.buy(5)
console.log(p2.checkstock());
*/
// both object created p1 and p2 have different stock size

// OBSERVER PATTERN 
class youtubechannel{
    constructor(){
        this.subscribers=[]
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`you have subscribed the channel. `)
    }
    unsubscribe(user){
        this.subscribers=this.subscribers.filter((sub)=>sub !== user)
        console.log("yoju un-subscribed the channel.");
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message))
    }
}

class user{
    constructor(name){
        this.name=name
    }
    update(data){
        console.log(data);
    }
}

let sherian= new youtubechannel();
let user1= new user("abhi")
let user2=new user("amrit")

sherian.subscribe(user1);
sherian.subscribe(user2);

sherian.notify("new video uploaded");