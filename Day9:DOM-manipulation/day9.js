//Activity 1 : Selecting nd manipulating the elements
/******************************** TASK 1 ******************************/

let text = document.getElementById("text")
text.textContent = "This is new paragraph"

/******************************** TASK 2 ******************************/

let bgColorElements = document.getElementsByClassName("bgColor");
for (let i = 0; i < bgColorElements.length; i++) {
    bgColorElements[i].style.backgroundColor = "yellow";
}

//Activity 2 : Creating and appending elements 
/******************************** TASK 3 ******************************/

const div = document.createElement("div")
div.textContent = "This is content inside div"
document.body.appendChild(div)

/******************************** TASK 4 ******************************/

let unorderdList = document.querySelector("ul")
let list = document.createElement("li")
list.textContent = "L3(appended)"
unorderdList.appendChild(list)

//Activity 3 : Creating and appending elements 
/******************************** TASK 5 ******************************/

let remove = document.getElementById("remove")
remove.remove()

/******************************** TASK 6 ******************************/

unorderdList.removeChild(unorderdList.lastElementChild);

//Activity 4 : Modifying attributes and classes
/******************************** TASK 7 ******************************/

let image = document.querySelector("img")
image.src = "changed_link.jpg"

/******************************** TASK 8 ******************************/

let addedClass = document.getElementsByClassName("Added_class");
for (let i = 0; i < addedClass.length; i++) {
    addedClass[i].classList.add("newClass");
}

let removeClass = document.getElementsByClassName("Remove_class");
for (let i = 0; i < removeClass.length; i++) {
    removeClass[i].classList.remove("Remove_class");
}

//Activity 5 : Event Handling
/******************************** TASK 9 ******************************/

let para = document.querySelector("p");
let button = document.querySelector("button")

button.addEventListener("click", ()=>{
    para.textContent = "This is new para content"
})

/******************************** TASK 10 ******************************/

const div1 = document.getElementById("div1");

div1.addEventListener("mouseover", () => {
    div1.style.border = "2px solid yellow";
});



