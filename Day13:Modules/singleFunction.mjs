const arrSum = (arr)=>{
    let len = arr.length
    console.log("length: "+len)
    let sum = 0
    for(let i=0 ;i<=len;i++){
        sum += i
    }

    return sum;
}

export default arrSum;