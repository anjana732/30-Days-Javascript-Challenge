//Activity 1 : Object creation and access
/************************************ TASK 1 **************************************/

let book = {
    Title : "C++",
    Author : "ABC",
    year : "2022"
}

console.log(book)

/************************************ TASK 2 **************************************/

console.log(`Title of book is ${book.Title} and Author is ${book.Author}`)

//Activity 2 : Object Methods
/************************************ TASK 3 **************************************/

book.detail = function(){
    console.log(`Title of book is ${book.Title} and Author is ${book.Author}`)
}
console.log("Printed using function")

book.detail()

/************************************ TASK 4 **************************************/

book.addYear = function (year){
    book.year = year;
}
book.addYear(2021)
console.log(book)

//Activity 3 : Nested Object
/************************************ TASK 5 **************************************/

let lib = {
    name: "ABC",
    book: [
        {
            Title: "java",
            year : 2000
        },
        {
            Title: "C++",
            year: 2001
        }
    ]
}

console.log(lib)

/************************************ TASK 6 **************************************/

console.log(`Library Name : ${lib.name}`)
lib.book.forEach(element => {
    console.log(`Book Name : ${element.Title}`)
});


//Activity 4 : The this keyword
/************************************ TASK 7 **************************************/

book.addYear2 = function(year){
    this.year = year
}

book.addYear2(1999);
console.log(book)

//Activity 5 : Object iteration
/************************************ TASK 8 **************************************/

console.log("Printing all the properties and its value ")
for (const key in book) {
    console.log(`${key}: ${book[key]}`)
}

console.log("Using hasOwnProperty method");

for(const key in book){
    if(book.hasOwnProperty(key)){
        console.log(`${key}: ${book[key]}`)
    }
}

/************************************ TASK 9 **************************************/

console.log(Object.keys(book));
console.log(Object.values(book));

