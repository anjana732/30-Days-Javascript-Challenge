//Activity 1: Array creation and access
/************************************ TASK 1 **************************************/
console.log("initialization of array")
let arr = [1,2,3,4,5];
console.log(arr)

/************************************ TASK 2 **************************************/

console.log("Accessing 1st and last element of array")
console.log(`First element of array is ${arr[0]}`)
console.log(`Last element of array is ${arr[arr.length - 1]}`)

//Activity 2: Array methods (Basic)
/************************************ TASK 3 **************************************/

console.log("Inserting value using push")
arr.push(6);
console.log(arr)

/************************************ TASK 4 **************************************/

console.log("Removing last element using pop")
arr.pop();
console.log(arr)

/************************************ TASK 5 **************************************/

console.log("Shiftinf element");
arr.shift()
console.log(arr)

/************************************ TASK 6 **************************************/

console.log("Using unshift with 1 parameter")
arr.unshift(7)
console.log(arr)
console.log("Using unshift with more than 1 parameter")
arr.unshift(8,9)
console.log(arr)

//Activity 3: Array methods (Intermediate)
/************************************ TASK 7 **************************************/

console.log("Printing twice of each element using map")
let newArr = [1,2,3,4,5]
let res = []
newArr.map((i)=>{
    res.push(i*2);
})
console.log(res);

/************************************ TASK 8 **************************************/

console.log("Getting only even elemets from array(using normal function)")
function even(value){
    if(value % 2 == 0)
    return value 
}
console.log(newArr.filter(even))

console.log("Getting only even elemets from array(using callback function)")
console.log(newArr.filter((value)=>{
    if (value % 2 == 0)
    return value
}))

/************************************ TASK 9 **************************************/

console.log("Sum of all element of array usimg reduce")
const sum = newArr.reduce((acc, i)=> acc+i)
console.log(sum)

//Activity 4: Array Iteration
/************************************ TASK 10 **************************************/

console.log("Printing array element using for loop")
for(let i = 0;i<newArr.length;i++){
    console.log(newArr[i]);
}

/************************************ TASK 11 **************************************/

console.log("Printing array element using for-each loop")
newArr.forEach(element => {
    console.log(element)
});

//Activity 5: Multi - dimentional Arrays
/************************************ TASK 12 **************************************/

console.log("Declaration and printing 2D array")
let twoDArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(twoDArray);
console.log("Printing 2D array using nested for loop")
for(let i = 0;i<twoDArray.length;i++){
    let value = ''
    for(let j=0;j<twoDArray[i].length;j++){
        value += (twoDArray[i][j]+" ");
    }
    console.log(value);
}


console.log(`Accessing random element from 2D array ${twoDArray[2][2]}`);