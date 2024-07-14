//Activity 1: Arithmetic Operators

let num1 = 10
let num2 = 20
let add = num1 + num2
console.log("Addition: ",add)
let sub = num2 - num1
console.log("Substraction: ",sub)
let mul = num1 * num2
console.log("Multiplication: ",mul)
let div = num2/num1
console.log("Division: ", div)
let rem = 5%2
console.log("Remainder: ",rem)

//Activity 2: Assignment Operator

console.log(`Assignment Additon ${num1 += num2}`)
console.log(`Assignment substraction ${num2 -= num1}`)

//Activity 3: Comparision Operator

if(20 > 10){
    console.log("20 is greater")
}

if(10 < 20){
    console.log("10 is less than 20")
}

if(31 >= 30){
    console.log("31 is greater than 30")
}

if(30 <= 30){
    console.log("30 is equal to 30")
}

if( 2 == "2"){
    console.log("2 is equal to \"2\" using ==")
}

if(2 === "2"){
    console.log("2 is equal to \"2\" using ===")
}else{
    console.log("2 is not equal to \"2\" using ===")
}

//Activity 4: Logical Operators

if(5<10 && 10<20){
    console.log("&& operator returns true")
}
else{
    console.log("&& operator returns false")
}

if (5>10 || 10<20){
    console.log("|| operator returns true")
}else{
    console.log("|| operator returns false")
}

if(!(5>10)){
    console.log("Use of negatation operator")
}


//Activity 5 : Terniary Opeartor

console.log((-5 < 0) ? "Number is negative" : "Number is positive")

