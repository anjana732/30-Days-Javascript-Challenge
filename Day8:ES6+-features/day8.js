//Activity 1 : Template literal
/********************************** TASK 1 *********************************/

console.log("Using template literal")
let name = "Ram"
let age = "10"
console.log(`Name of the person is ${name} and age is ${age}`)

/********************************** TASK 2 *********************************/

console.log("Using multiline Template")
let multilineTemplate = `Hello, There 
Coding is beautiful.
`
console.log(multilineTemplate);

//Activity 2 : Destructuring
/********************************** TASK 3 *********************************/

console.log("Destructure of array")
let arr = [1,2,3,4,5]

const [a,b] = arr;
console.log(a);
console.log(b);

/********************************** TASK 4 *********************************/

console.log("Destructure of object")

let book = { 
    title : "C++",
    year : "2021"
}

const {title, year} = book
console.log(title);
console.log(year);

//Activity 2 : Spread and Rest Operator
/********************************** TASK 5 *********************************/

console.log("Using spread operator")
let newArr = [1,2, ...arr]
console.log(newArr)

/********************************** TASK 6 *********************************/

console.log("Using rest operator")
function sumOfArgs(...args){
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    console.log(sum);
}

sumOfArgs(1,2,3,4);

//Activity 4 : Default Parameters
/********************************** TASK 7 *********************************/

console.log("Product uisng default parameter")
function product(num1, num2 =1){
    let res = num1 * num2;
    return res;
}

console.log(product(3))

//Activity 4 : Enhanced Object literal
/********************************** TASK 8 *********************************/

console.log("Enhanced object literal")
const person ={
    name,
    age,
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

console.log(person)

/********************************** TASK 9 *********************************/
console.log("Dynamic property name using computed property")
const computedProperty = "value";

let obj = {
    [computedProperty] : "This is new value"
}

console.log(obj)