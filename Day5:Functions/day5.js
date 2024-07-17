//Activity 1: Function declaration
/********************************* TASK 1 *********************************/

const num1 = 20;
function checkEvenOdd(num) {
    if(num % 2 == 0){
        console.log(`Given number is ${num} which is even`);
    }else{
        console.log(`Given number is ${num} which is odd`);
    }
}
checkEvenOdd(num1)

/********************************* TASK 2 *********************************/

const num2 = 25

function findSquareRoot(num){
    console.log(`Square root of ${num} is Math.sqrt(num)`);
}

findSquareRoot(num2);

//Activity 2: Function Expression
/********************************* TASK 3 *********************************/

const maximum = function(number1, number2, number3){
    if(number1 > number2){
        if(number1 > number3){
            console.log(`${number1} is maximum`);
        }else{
            console.log(`${number3} is maximum`);
        }
    }else{
        if(number2 > number3){
            console.log(`${number2} is maximum`);
        }else{
            console.log(`${number3} is maximum`);
        }
    }
}

maximum(40,50,60);

/********************************* TASK 4 *********************************/

let concatString =function(str1, str2){
    if(typeof(str1)!= "string"){
        str1 = String(str1);
    }
    if(typeof(str2)!= "string"){
        str2 = String(str2);
    }
    return (str1+str2);
}

console.log(concatString("Anjana", "Kumari"));

//Activity 3: Arrow Function
/********************************* TASK 5 *********************************/

const sumOfNumber = (num1, num2)=>{
    return num1+num2;
}

console.log(sumOfNumber(3,7));

/********************************* TASK 6 *********************************/

const str1 = "Raam is a good boy"
const findValueInString = (str, value) => {
    return str.includes(value);
}

console.log(findValueInString(str1,"good"))

//Activity 4: Function Parameters and default value
/********************************* TASK 7 *********************************/

function product(num1 , num2 = 10){
    console.log(num1 *num2)
}

product(2)

/********************************* TASK 8 *********************************/

const personGreeting = (name, age = 20) =>{
    const greeting = "Good Morning"
    return greeting + " " + name + " "+ "your age is "+ age;
}

console.log(personGreeting("Anjana"));

//Activity 5: Higher order function
/********************************* TASK 9 *********************************/

const HigherOrderFunction = (fun1, itr)=>{
    let value = 0;
    for(let i= 1; i<=itr;i++){
        value = fun1(i,i+1);
    }
    return value;
}

console.log(HigherOrderFunction(sumOfNumber,5));

/********************************* TASK 10 *********************************/

const func1 = ()=>{
    console.log("Function 1");
}

const func2 = () => {
    console.log("Function 2");
}

const HigherOrderFunction2 = (fun1,fun2,value) =>{
    let res = 0;
    for(let i=1;i<=value;i++){
        fun1();
        res += i;
    }
    for(let i = 0;i<res;i++){
        fun2()
    }
}

HigherOrderFunction2(func1,func2,2)


