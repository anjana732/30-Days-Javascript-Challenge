//Activity 1 : Foor Loop 
/******************************** TASK 1 **********************************/

console.log("Counting from 1 to 10");
for (let num = 1; num <= 10; num++){
    console.log(num);
}

/******************************** TASK 2 **********************************/

console.log("Table of 5")
for(let num = 1; num <= 10; num++){
   console.log(`5 * ${num} = ${(5*num)}`);
}

//Activity 2 : While Loop 
/******************************** TASK 3 **********************************/

console.log("Sum of numbers from 1 to 10")
let num = 1
let sum = 0
while(num <= 10){
    console.log(`${sum} + ${num} = ${sum += num}`);
    num++;
}

/******************************** TASK 4 **********************************/

console.log("Numbers in Reverse");
let num1 = 10;
while(num1 >= 1){
    console.log(num1);
    num1--;
}

//Activity 3 : do-While Loop 
/******************************** TASK 5 **********************************/

console.log("Printing numbers from 1 to 5 using do-while");
let num3 = 1;
do{
    console.log(num3);
    num3++;
}while(num3 <= 5)

/******************************** TASK 6 **********************************/

console.log("Printing Factorial of 5");
let num4 = 1;
let fact = 1;
do{
    fact *= num4;
    num4++;
}while(num4 <= 5)

console.log(`Factorial of 5 is ${fact}`);

//Activity 4 : Nested Loops
/******************************** TASK 7 **********************************/

console.log("Printing Pattern")
for(let i=0;i<5;i++){
    let pattern = '';
    for(let j=0;j<=i;j++){
       pattern += '* ';
    }
    console.log(pattern);
}

//Activity 4 : Loop control statement
/******************************** TASK 8 **********************************/

console.log("Skipping 5 using continue");
for(let i=1;i<=10;i++){
    if(i == 5) continue;
    console.log(i);
}

/******************************** TASK 9 **********************************/

console.log("Printing till 6 using break");
for(let i=1;i<=10;i++){
    if(i==7) break;
    console.log(i);
}