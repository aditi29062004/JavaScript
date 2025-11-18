let score="33";
console.log(score)
console.log(typeof score)

let scoreInNum=Number(score);
console.log(scoreInNum)
console.log(typeof scoreInNum)

/*
score="33" -> 33
score="33abc" -> Nan(type:number)
score=undefined -> Nan(type:number)
score=null -> 0
score=true-> 1 ;score=false -> 0
*/

let loggedIn;
console.log(loggedIn)
console.log(typeof loggedIn)

let boolLoggedIn=Boolean(loggedIn)
console.log(boolLoggedIn)
console.log(typeof boolLoggedIn)

/*
any other num than 0(+ve or -ve) => true
num:0 => false
"" => false
"value" => true
null & undefined =>false
*/

let someNum=33;
console.log(typeof String(someNum))

