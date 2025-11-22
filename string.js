let name="aditi"
let age=21

/*
the format with conactenation like
console.log(name +age +"value")
is very outdated even though gives resut 
but we use the syntax given below
*/

console.log(`my name is ${name} and i have gained ${age} years of life experience till now`)
console.log(name.length)

/*
String can also be defined through another way which gives 
us access to each character and useful functions
*/

let str=new String("vaibhav sharma")
console.log(str.length)
console.log(str.charAt(2))
console.log(str.indexOf('b'))
console.log(str.includes("bha"))
console.log(str.replace("bh","u"))
console.log(str.replaceAll('v','i'))
console.log(str.split(" "))
console.log(str.slice(1,5))
console.log(str.toUpperCase())
console.log("   hello   ".trim())

//more at :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String