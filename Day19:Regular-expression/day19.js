//Activity 1 : Basic Regular Expression
/*********************************** TASK 1 ********************************/
const text = "It's 30 days javascript challange."
const regex = /javascript/;

const matches = text.match(regex);

console.log(`Match: ${matches}`);

/*********************************** TASK 1 ********************************/

const findNumber = "It is 19 day of 30 days javascript challange"
const numRegex = /\d+/g

const numRes = findNumber.match(numRegex)

numRes.forEach((match , index ) => {
    console.log(`match: ${match} at index ${index}`)
});

//Activity 2 : Character classes and quantifier
/*********************************** TASK 3 ********************************/



