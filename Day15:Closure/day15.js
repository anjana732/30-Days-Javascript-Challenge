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
/************************************ TASK 6 ************************************/

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
/************************************ TASK 7 ************************************/

function memoizeOuterFunc(fn) {
    
    const prevCom = new Map();
    function memoizeInnerFunc(...args) {
        const jsonRes = JSON.stringify(args);
        if (prevCom.has(jsonRes)) {
            console.log('Previous computation:', args);
            return prevCom.get(jsonRes);
        }

        console.log('Computing result for args:', args);
        const result = fn(...args);
        prevCom.set(jsonRes, result);

        return result;
    };
    return memoizeInnerFunc
}

function add(a, b) {
    return a + b;
}


const memoizedAdd = memoizeOuterFunc(add);

console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(5, 7)); 

/************************************ TASK 8 ************************************/

function memoize(fn) {
    const cache = {};
    return function(n) {
       
        console.log('Factorial of ', n);
        const result = fn(n);
        cache[n] = result;

        return result;
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));


