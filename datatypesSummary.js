/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes(Reference Types)
       Arrays  =>  object
       Object  =>  object
       Function  =>  function   
*/

let score=33
let name="aditi"
let loggedIn=true
let temperature=null
let emailId;

let Id=Symbol("123")
let anotherId=Symbol("123")
console.log(Id===anotherId)

let bigNum=126898632n

let arr=["ml","dsp","cn","cs","pehv"]
let myobj={
    name:"aditi",
    age:22
}
let print=function(){
    console.log("hello world")
}
console.log(typeof print)
