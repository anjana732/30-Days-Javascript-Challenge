import add from "./add.mjs";
import person from "./personObj.mjs";
import { mathAdd } from "./mathModule.mjs";
import { substraction, multiplication, division } from "./mathModule.mjs";
import arrSum from "./singleFunction.mjs";
import { fadd, fsubtract, fmultiply, fdivide, PI, E } from "./functionConstexport.mjs";
import lodash from 'lodash'
import axios from "axios";


const num1 = 10;
const num2 = 20;

const sum =  add(num1, num2)
console.log(sum)

console.log(person)

console.log(mathAdd(30,40))
console.log(substraction(20,10));
console.log(multiplication(2,5))
console.log(division(10,2))

console.log(arrSum([1,2,3,4]))

console.log("value of PI : "+ PI)
console.log(`Add: ${fadd(10,20)}, substract: ${fsubtract(20,10)}, Multiply: ${fmultiply(2,10)}, Division: ${fdivide(10,2)}`)

//Array manipulation using lodash

const arr = [1,2,3,4,5,6]
const newArr = lodash.chunk(arr,2)
console.log(newArr)

//String manipulation using lodash

const str = "Hello world"
const newStr = lodash.camelCase(str)
console.log(newStr)


// using axios

const url = 'https://api.github.com/users/anjana732'

const useAxios = async()=>{
    const res = await axios(url)
    console.log(res.data)
}

useAxios()




