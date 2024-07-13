//Activity 1: Varialble Declaration

var num = 12
console.log("Declaration using var",num)
let str = "Anjana"
console.log("Decalration using str",str)

//Activity 2: Consatnt Declaration

const value = true
console.log("Constant declaration",value)

//Activity 3: Data Types

let num1 = 20
let str2 = "Kumari"
let value1 = false
let obj = {
    name: "Anjana",
    surname: "Kumari"
}
let arr = [1,2,3,4,5]
console.log("Number: ",typeof(num1))
console.log("String: ",typeof(str2))
console.log("Boolean: ",typeof(value1))
console.log("Object: ",typeof(obj), obj);
console.log("Array: ",typeof(arr));


//Activity 4 : Reassigning Variable

let reassignement = "initaialValue"
console.log("Initial value for reassignment: ",reassignement)
reassignement = "newValue"
console.log("Valur after reassignment: ",reassignement)

// Activity 5 : Understanding const 

// value = false (TypeError :Assignement to constant variable)


//Feature Request 
//1. Variable types console log

    let num2 = 30
    let str1 = "Chai aur Code"
    let bool = true
    let obj1 = {
        key1: "Value1",
        key2: "Value2" 
    }
    let arr2 = [9,6,"anjana",7,4]
    console.log(`Type is: ${typeof(num2)} and Value is: ${num2}`)
    console.log(`Type is: ${typeof(str1)} and Value is: ${str1}`)
    console.log(`Type is: ${typeof(bool)} and Value is: ${bool}`)
    console.log(`Type is: ${typeof(obj1)} and Value is: ${JSON.stringify(obj1)}`)
    console.log(`Type is: ${typeof(arr2)} and Value is: ${arr2}`)

//2 . Reassignment Demo
    let letDemo = "InitialLetVAlue"
    console.log("Initail let value: ",letDemo)
    const constDemo = "InitialConstValue"
    letDemo = "NewLetDemo"
    console.log("New let Value: ", letDemo)
    // constDemo = "newConstValue" ERROR(TypeError: Assignment to constant variable.)
 
