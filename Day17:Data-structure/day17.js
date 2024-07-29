//Activity 1 : Linked List
/************************************ TASK 1 ************************************/

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

let firstNode = new Node(10);
console.log(firstNode.value)

/************************************ TASK 2 ************************************/

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value) {
        const newNode = new Node(value);
    
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode; 
    }
    removeLast() {
        if (!this.head) {
            return;
        }

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }

        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }

        current.next = null;
        this.tail = current;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("List after adding nodes:");
list.display(); 

list.removeLast();

console.log("List after removing the last node:");
list.display(); 

//Activity 2 : Stack
/************************************ TASK 3 ************************************/

class Stack {
    constructor() {
        this.items = []; 
    }

    push(value) {
        this.items.push(value); 
    }

    pop() {
       
        return this.items.pop(); 
    }

    peek() {
       
        return this.items[this.items.length - 1]; 
    }

    pushStr(value) {
        this.items.push(value); 
    }
    popStr(){
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop(); 
    }

    peek() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[this.items.length - 1]; 
    }

    isEmpty() {
        return this.items.length === 0; 
    }

    size() {
        return this.items.length; 
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Peek:", stack.peek());

console.log("Pop:", stack.pop()); 
console.log("Pop:", stack.pop()); 

console.log("Peek:", stack.peek()); 

/************************************ TASK 4 ************************************/


function reverseString(str) {
    const stack = new Stack();

    for (let char of str) {
        stack.pushStr(char);
    }

    let reversedStr = '';

    while (!stack.isEmpty()) {
        reversedStr += stack.popStr();
    }

    return reversedStr;
}


const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

//Activity 3 : Queue
/************************************ TASK 4 ************************************/

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value); 
    }

    dequeue() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items.shift(); 
    }

    front() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[0]; 
    }

    isEmpty() {
        return this.items.length === 0; 
    }

}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front:", queue.front()); 

console.log("Dequeue:", queue.dequeue());
console.log("Dequeue:", queue.dequeue()); 

console.log("Front:", queue.front());

/************************************ TASK 6 ************************************/

class PrintJob {
    constructor(id, description) {
        this.id = id; 
        this.description = description;
    }
}
class PrinterQueue {
    constructor() {
        this.queue = new Queue(); 
    }

    addPrintJob(id, description) {
        const job = new PrintJob(id, description);
        this.queue.enqueue(job); 
        console.log(`Added print job ${id}: ${description}`);
    }

    processNextJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs to process.");
            return;
        }
        const job = this.queue.dequeue(); 
        console.log(`Processing print job ${job.id}: ${job.description}`);
    }

    displayPendingJobs() {
        if (this.queue.isEmpty()) {
            console.log("No pending print jobs.");
            return;
        }
        console.log("Pending print jobs:");
        for (const job of this.queue.items) {
            console.log(`Job ${job.id}: ${job.description}`);
        }
    }
}

const printerQueue = new PrinterQueue();

printerQueue.addPrintJob(1, "Document 1");
printerQueue.addPrintJob(2, "Document 2");
printerQueue.addPrintJob(3, "Document 3");

printerQueue.displayPendingJobs();

printerQueue.processNextJob();
printerQueue.processNextJob(); 

printerQueue.displayPendingJobs();

printerQueue.processNextJob();

printerQueue.processNextJob();

/************************************ TASK 7 ************************************/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);

root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

inOrderTraversal(root);

/************************************ TASK 8 ************************************/

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertRecursively(this.root, newNode);
        }
    }

    insertRecursively(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertRecursively(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertRecursively(node.right, newNode);
            }
        }
    }

    inOrderTraversal() {
        this.inOrderTraversalRecursively(this.root);
    }

    inOrderTraversalRecursively(node) {
        if (node !== null) {
            this.inOrderTraversalRecursively(node.left);
            console.log(node.value);
            this.inOrderTraversalRecursively(node.right);
        }
    }
}


const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(20);

binaryTree.inOrderTraversal(); 

/************************************ TASK 9 ************************************/

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            throw new Error("Both vertices must be added before adding an edge.");
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    bfs(start) {
        if (!this.adjacencyList.has(start)) {
            throw new Error("Start vertex not found in the graph.");
        }

        const visited = new Set();
        const queue = [];

        visited.add(start);
        queue.push(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}


const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log("BFS starting from vertex A:");
graph.bfs('A');

/************************************ TASK 10 ************************************/

class networkGraph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            throw new Error("Both vertices must be added before adding an edge.");
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    bfsShortestPath(start, end) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            throw new Error("Start or end vertex not found in the graph.");
        }

        const visited = new Set();
        const queue = [];
        const predecessor = new Map();

        visited.add(start);
        queue.push(start);
        predecessor.set(start, null);

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (vertex === end) {
                return this.constructPath(predecessor, end);
            }

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    predecessor.set(neighbor, vertex);
                }
            }
        }

        return null; 
    }

    constructPath(predecessor, end) {
        const path = [];
        for (let at = end; at !== null; at = predecessor.get(at)) {
            path.push(at);
        }
        path.reverse();
        return path;
    }
}

const graph1 = new networkGraph();

graph1.addVertex('A');
graph1.addVertex('B');
graph1.addVertex('C');
graph1.addVertex('D');
graph1.addVertex('E');

graph1.addEdge('A', 'B');
graph1.addEdge('A', 'C');
graph1.addEdge('B', 'D');
graph1.addEdge('C', 'D');
graph1.addEdge('D', 'E');

const shortestPath = graph1.bfsShortestPath('A', 'E');
console.log("Shortest path from A to E:", shortestPath);



