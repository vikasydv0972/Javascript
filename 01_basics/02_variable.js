const accountId = 144434
let accountEmail= "vikas@gmail.com"
var accountPass="12344"
accountCity="noida"
//accountState;

//accountId=2 //not allowed
accountEmail="vy@vy.com"
accountPass="21212121"
accountCity="pune"

console.log(accountId)
console.table([accountId,accountEmail,accountPass,accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
//alert("hello") // we can use in broweser not in node js
