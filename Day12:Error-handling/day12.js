//Activity 1 : Basic error handling with try catch
/********************************* TASK 1 **************************************/

console.log("Handling simple error : TASK 1")
const ErrorFunction = () => {
    throw new Error("This is an intentional error!");
};

const handleErrorFunction = () => {
    try {
        ErrorFunction();
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
};

handleErrorFunction();

/********************************* TASK 2 **************************************/

console.log("Handling division by 0 error : TASK 2")
const division = ()=>{
    let num = 10
    for(let i =5;i>=0;i--){
        if(i == 0){
            throw new Error("Number divided by 0")
        }
        console.log(num/i)
    }
}

const handleDivisionByZero = () =>{
    try{
        division()
    }catch(e){
        console.log("Error: "+ e.message)
    }
}

handleDivisionByZero()

//Activity 2 : Finally block
/********************************* TASK 3 **************************************/

console.log("using try-catch to understand flow of finally(catch not included): TASK 3")
try{
    console.log("Inside try block")
}catch{
    console.log("Inside catch block")
}finally{
    console.log("Inside Finally block")
}

console.log("using try-catch to understand flow of finally(catch included): TASK 3")

try{
    console.log("Inside try block")
    throw new Error("Try throws Error")
}catch(e){
    console.log("Error"+ e.msg);
}finally{
    console.log("Inside finally block")
}

//Activity 3 :Custom error objects
/********************************* TASK 4 **************************************/

console.log("Handing error using custom error class: TASK 4")
class cutomError extends Error{
    constructor(message){
        super(message)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor)
    }
}

const throwCustomError = ()=>{
    try{
        throw new cutomError("Error: Custom Error")
    }catch(e){
        console.log(e.message)
    }
}

throwCustomError()

/********************************* TASK 5 **************************************/

console.log("Using custom error function to validate string : TASK 5")
class nullUserInputError extends Error{
    constructor(message){
        super(message)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor)
    }checkString
}
const checkString = (str)=>{
    if(str == ""){
        throw new nullUserInputError("Null user input")
    }else{
        console.log(str)
    }
}

const validateString = (str)=>{
    try{
        checkString(str)
    }catch(e){
        console.log("Error: " + e.message)
    }
}

validateString("")


//Activity 4 : Error handling in promises
/********************************* TASK 6 **************************************/

console.log("Error handling using promises : TASK 6")
const promise = (timeLimit)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(timeLimit <= 2000){
                resolve("Promise resolved")
            }else{
                reject("Promise rejected")
            }
        },timeLimit)
    })
}

promise(1000)
.then((msg)=>{
    console.log(msg)
})
.catch((e)=>{
    console.log(e)
})

/********************************* TASK 7 **************************************/

console.log("Error handling in async function using try-catch: TASK 7")
const asyncFunc = async(time)=>{
    return await new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(time <= 2000){
                resolve("Promise resolved by async")
            }else{
                reject("Promise Rejected by async")
            }
        },time)
    })
}

const asyncFuncHandler = async (time)=>{
    try{
        const res = await asyncFunc(time);
        console.log(res)
    }catch(e){
        console.log(e)
    }
}

asyncFuncHandler(1000)

//Activity 5 : Graceful error handling in fetch
/********************************* TASK 8 **************************************/

console.log("Error handling using promises for invalid url data fetching :  TASK 8")
const url = 'https://invalid-url-example.com'
const getData = ()=>{
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json()
    }).then((data)=> {
        console.log(data)
    })
    .catch((err)=>{
        console.log("Error fetching data : " + err.message)
    })
}

getData()

/********************************* TASK 9 **************************************/

console.log("Error handling in async function using try catch for invalid url data fetching :  TASK 9")
const fetchData = async () =>{
    try{
        const res = await fetch(url)
        const data = res.json();
        console.log(data)
    }catch(e) {
        console.log("Error fetching data(using async): " + e.message)
    }
    
}

fetchData()

