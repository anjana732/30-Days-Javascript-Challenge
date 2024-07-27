//Activity 1 : Understanding closure
/************************************ TASK 1 ************************************/

function outerFunc (){
    let name = "Outer func variable"
    function innerFunc(){
        return `Called by inner function : ${name}`
    }
    return innerFunc
}

const res = outerFunc()
console.log(res())

/************************************ TASK 2 ************************************/

function privateCounterOuterFunc(){
    let counter = 0
    function privateCounterInnerFunc(){
        counter++;
        return counter;
    }
    return privateCounterInnerFunc
}

const innerCounter = privateCounterOuterFunc()
console.log(innerCounter())

//Activity 2 : Prctical closure
/************************************ TASK 3 ************************************/

function generateUniqueIdOuter(){
    uniqueId = (Math.floor(Math.random()*10))
    function generateUniqueIdInner(){
        uniqueId++
        return uniqueId
    }
    return generateUniqueIdInner
}

const uniqueIdres = generateUniqueIdOuter()
console.log(uniqueIdres())

/************************************ TASK 4 ************************************/

function greetOuter(name){
    this.name = name
    function greetInner(){
        return `Hello ${this.name}`
    }
    return greetInner
}

const greetRes = greetOuter("Anjana")
console.log(greetRes())

//Activity 3 : Closures in loops
/************************************ TASK 5 ************************************/

function OuterArrayFunc(size){
    const functionArr = []
    for(let i=0;i<size;i++){
        functionArr.push(function(){
            console.log(i);
        })
    }
    return functionArr
}

const arrayres = OuterArrayFunc(5)
arrayres.forEach(fn => fn());

//Activity 4 : Modules
/************************************ TASK 5 ************************************/

function itemOuter(){
    const list = ["item1","item2","item3"];
   
        function addItem(item){
            list.push(item)
        }
        function removeItem(){
            list.pop()
        }
        function display(){
            console.log(list)
        }
    
    return {
        addItem,
        removeItem,
        display
    }
}

const list1 = itemOuter()
console.log(list1);
list1.addItem("item4")
list1.display()
list1.removeItem()
list1.display()

//Activity 5 : Memoization
/************************************ TASK 6 ************************************/
