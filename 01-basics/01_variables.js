const accountid =12345
let accountemail = "abhi@123"
var accountpsd="3333"
accountcity = "jaipur"

//accountid=3344  // not allowed
accountemail="gitlab@22"
accountpsd="0007"
accountcity="delhi"/*not a good way to declear a variable*/
let accountste
console.log(accountid);
/*preffer not to use var, because of issue in block scope */
console.table([accountid,accountemail,accountpsd,accountcity,accountste])

