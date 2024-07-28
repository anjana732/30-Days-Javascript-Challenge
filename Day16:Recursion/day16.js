//Activity 1 : Basic Recursion
/*************************************** TASK 1 ***********************************/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(0));
console.log(factorial(7)); 
console.log(factorial(4));

/*************************************** TASK 2 ***********************************/

function fibonacci(n) {
    if (n <= 0) return 0;  
    if (n === 1) return 1; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

console.log(fibonacci(5)); 
console.log(fibonacci(8));  
console.log(fibonacci(10));

//Activity 2 : Recursion with array
/*************************************** TASK 3 ***********************************/

function sumArray(arr) {
   
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, -2, 3]));     
      
/*************************************** TASK 4 ***********************************/

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const maxOfRest = findMax(arr.slice(1));
    return Math.max(arr[0], maxOfRest);
}

console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMax([10, -2, 3])); 

//Activity 3 : String manipulation with recursion
/*************************************** TASK 5 ***********************************/

function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));

/*************************************** TASK 6 ***********************************/
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (cleanedStr.length <= 1) {
        return true;
    }
    if (cleanedStr[0] !== cleanedStr[cleanedStr.length - 1]) {
        return false;
    }

    return isPalindrome(cleanedStr.slice(1, -1));
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));

//Activity 4 : Recursive Research
/*************************************** TASK 7 ***********************************/

function binarySearch(arr, target, low = 0, high = arr.length - 1) {

    if (low > high) {
        return -1; 
    }


    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    }
    if (target < arr[mid]) {
        return binarySearch(arr, target, low, mid - 1);
    }
    
    return binarySearch(arr, target, mid + 1, high);
}


const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

const index = binarySearch(sortedArray, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}

/*************************************** TASK 8 ***********************************/

function countOccurrences(arr, target, index = 0) {

    if (index >= arr.length) {
        return 0;
    }
    const countInRest = countOccurrences(arr, target, index + 1);
    return (arr[index] === target ? 1 : 0) + countInRest;
}


const array = [1, 3, 7, 8, 7, 7, 9, 7];
const target1 = 7;

const count = countOccurrences(array, target1);

console.log(`The target ${target1} occurs ${count} times in the array.`);

/*************************************** TASK 9 ***********************************/

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

const root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(6, new TreeNode(5), new TreeNode(7));

inOrderTraversal(root);

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}


const root1 = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(6, new TreeNode(5), new TreeNode(7));

const depth = calculateDepth(root1);
console.log("Depth of the binary tree:", depth);

























