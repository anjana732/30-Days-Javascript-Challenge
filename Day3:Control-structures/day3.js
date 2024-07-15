//Activity 1: if-else statement
/************************ TASK 1 *************************/

let num = 0
if(num > 0){
    console.log("Number is positive")
}else if(num < 0){
    console.log("Number is negative")
}else if(num === 0){
    console.log("Number is 0")
}else{
    console.log("Not a number")
}

/************************ TASK 2 *************************/

let age = 300
if(age <18){
    console.log("Person is not eligible to vote")
}else if(age >= 18 && age <= 100){
    console.log("Person is eligible to vote")
}else{
    console.log("Enter valid age")
}

//Activity 2 : Nested if-else statement
/************************ TASK 3 *************************/

let num1 = 60, num2 = 50, num3 = 30
if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is greater than both ${num2} and ${num3}`)
    }else{
        console.log(`${num3} is greater than both ${num1} and ${num2}`)
    }
}else {
    if(num2 > num3){
        console.log(`${num2} is greater than both ${num1} and ${num3}`)
    }else{
        console.log(`${num3} is greater than both ${num1} and ${num2}`)

    }
}

//Activity 3 : Switch Case
/************************ TASK 4 *************************/

let day = 5

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2: 
        console.log("Monday");
        break;
    case 3: 
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter valid da number");
        break;
}

/************************ TASK 5 *************************/

let score = 52
switch(true){
    case (score >= 90): 
        console.log("Grade A");
        break;
    case (score >= 80):
        console.log("Grade B");
        break;
    case (score >=70):
        console.log("Grade C");
        break;
    case (score >= 60):
        console.log("Grade D");
        break;
    case (score >= 50):
        console.log("Grade E");
        break;
    case (score >= 40):
        console.log("Grade F");
        break
    default:
        console.log("Failed");
        break;
}

//Activity 4 : Conditional(Ternary) operator
/************************ TASK 6 *************************/

let number1 = 5;

(number1%2 == 0)?console.log("Number is even"):console.log("Number is odd")

//Activity 5 : Combining operators
/************************ TASK 7 *************************/

let year = 2034

if(year % 4 == 0){
    if(year % 100 == 0){
        console.log("Not a leap year");
    }else{
        console.log("Leap year");
    }
}else{
    if(year % 400 == 0){
        console.log("Leap year");
    }else{
        console.log("Not a Leap year");
    }
}

