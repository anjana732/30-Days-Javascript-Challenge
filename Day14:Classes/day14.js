//Activity 1: Class definition

class person{
    name
    age
    firstName
    lastName
    constructor(name, age,firstName,lastName){
        this.name = name;
        this.age = age;
        this.firstName = firstName
        this.lastName = lastName
    }
    greeting(){
        return `Hello your name is ${this.name} and your age is ${this.age}`
    }
    static genericGreeting(){
        return "This is generic greeting";
    }

    setter(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    getter(){
        console.log(this.firstName)
        console.log(this.lastName)
    }
}

const p1 = new person("Ram", 34);
console.log(p1)
console.log(p1.greeting())

/*********************************** TASK 2 *************************************/

person.prototype.updateAge = function(newAge) {
    this.age = newAge;
};

const p2 = new person("Shyam", 40)
p2.updateAge(20)
console.log(p2)

//Activity 2 : Class Inheritance
/*********************************** TASK 3 *************************************/

class student extends person{
    static sNo = 0
    constructor(name, age, studentId){
        super(name,age)
        this.studentId = studentId
        this.sNo = student.sNo++
    }
    returnStudentId(){
        return this.studentId;
    }
/*********************************** TASK 4 *************************************/
    greeting(){
        return `Hello your name is ${this.name} and your age is ${this.age} , your studentId is ${this.studentId}`
    }
}

const s1 = new student("Mona", 20, 1)
console.log(s1.greeting())

//Activity 3 : Static method and properties
/*********************************** TASK 5 *************************************/

console.log(person.genericGreeting())


console.log(person.sNo)

//Activity 4: getter and setter

const newPerson = new person("Sohan",35,"Sohan","Kumar")
console.log(newPerson)
newPerson.setter("Mohan", "Kumar")
newPerson.getter()

//Activity 5: Private fields
/*********************************** TASK 9 *************************************/

class Account{
    #balance = 0
    deposite(amount){
        this.#balance = this.#balance + amount
    }
    withDraw(amount){
        this.#balance = this.#balance - amount
    }
    showBalance(){
        console.log(this.#balance)
    }
}


const acc = new Account
acc.deposite(1000)
acc.showBalance()
acc.withDraw(200)
acc.showBalance()

/*********************************** TASK 10 *************************************/

acc.balance = 5000 // this line can't access the balance 
acc.showBalance()