//Activity 1 : Understanding the promises
/********************************** TASK 1 ***********************************/
const resolvePromise = ()=>{
    return new Promise((resolve, rejecct) =>{
        setTimeout(()=>{
            resolve("Resolve after 2 sec")
        },2000)
    })
}

resolvePromise().then((msg)=>{
    console.log(msg)
})

/********************************** TASK 2 ***********************************/

const rejectPromise = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("Promise rejected after 2 sec")
        },2000)
    })
}

rejectPromise().then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})

//Activity 2 : Chaining promises
/********************************** TASK 3 ***********************************/

const fetchData1 = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data from server1")
        }, 1000)
    })
}

const fetchData2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from server 2")
        },1000)
    })
}

const  fetchData3 = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Data from server 3")
        },1000)
    })
}

fetchData1()
.then((data1)=>{
    return fetchData2(data1)
})
.then((data2) => {
    return fetchData3(data2)
})
.then((finalData)=>{
    console.log(finalData)
})
.catch((err)=>{
    console.log(err)
})

//Activity 3 : Using async await
/********************************** TASK 4 ***********************************/

const resolveAfter2Sec = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Resolved for async function")
        },2000)
    })
}
const asyncFunc = async() =>{
   const res = await resolveAfter2Sec()
   console.log(res)
}

asyncFunc()



/********************************** TASK 5 ***********************************/

const rejectAfter2Sec = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject("Promise rejected for async function")
        },1000)
    })
}

const asyncForReject = async()=>{
    try{
        await rejectAfter2Sec()
    }catch(err){
        console.log("Error: ", err)
    }
}

asyncForReject()

//Activity 4 : Fetching data from API
/********************************** TASK 6 ***********************************/

const url = 'https://api.github.com/users/anjana732'
fetch(url)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

/********************************** TASK 7 ***********************************/

const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

fetchData();


//Activity 4 : Concurrent promises
/********************************** TASK 6 ***********************************/

const promise1 = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Promise 1 resolved")
        }, 1000)
    })
}

const promise2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Promise 2 resolved")
        }, 2000)
    })
}

const promise3 = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise 3 resolved")
        },3000)
    })
}

Promise.all([promise1, promise2, promise3])
.then((result)=>{
    console.log("All promises resolved", result)
})
.catch((err)=>{
    console.log(err)
})




const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Result from promise 1');
    }, 3000);
});

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Result from promise 2');
    }, 1000);
});

const Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Result from promise 3');
    }, 2000);
});

Promise.race([Promise1, Promise2, Promise3])
    .then(result => {
        console.log('First resolved promise value:', result);
    })
    .catch(error => {
        console.error('Promise race error:', error);
    });

//https://api.github.com/users/anjana732