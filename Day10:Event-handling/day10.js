//Activity 1 : Basic event handling
/********************************* TASK 1 *********************************/

const button = document.querySelector("button")
const para = document.querySelector("p")
button.addEventListener("click", ()=>{
    para.textContent = "this is new para content"
})

/********************************* TASK 2 *********************************/

const toggleImage = document.getElementById("toggle_image");
toggleImage.addEventListener("dblclick", ()=>{
    // toggleImage.style.width = "400px"
    // toggleImage.style.height = "400px"
    if (toggleImage.style.display === "none") {
        toggleImage.style.display = "block";
    } else {
        toggleImage.style.display = "none";
    }
})

//Activity 2 : Mouse event
/********************************* TASK 3 *********************************/

const changeBgColor = document.getElementById("changeBgColor")
changeBgColor.addEventListener("mouseover", ()=>{
    changeBgColor.style.backgroundColor = "red"
})

/********************************* TASK 4 *********************************/

changeBgColor.addEventListener("mouseout", ()=>{
    changeBgColor.style.backgroundColor = "aquamarine"
})


//Activity 3 : Keyboard event
/********************************* TASK 5 *********************************/

const keyDownEventInput = document.getElementById("key_down_event_input")

keyDownEventInput.addEventListener("keydown", (event)=> {
   // console.log(event);
    console.log(event.key)
})

/********************************* TASK 6 *********************************/

const inputField = document.getElementById("inputField");
        const displayParagraph1 = document.getElementById("displayParagraph");

        inputField.addEventListener("keyup", () => {
            displayParagraph1.textContent = `Current value: ${inputField.value}`;
        });

/********************************* TASK 7 *********************************/
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    console.log("Form submitted with name:", name);
})

/********************************* TASK 8 *********************************/

const selectElement = document.getElementById("mySelect");
const displayParagraph = document.getElementById("displayParagraph");

selectElement.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    displayParagraph.textContent = `Selected value: ${selectedValue}`;
});

/********************************* TASK 9 *********************************/

const list1 = document.getElementById("myList");

list1.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});

/********************************* TASK 10 *********************************/

const list = document.getElementById("myList");
        const addItemButton = document.getElementById("addItem");

        list.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                console.log(event.target.textContent);
            }
        });

       
        function addListItem() {
            const newItem = document.createElement("li");
            newItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(newItem);
        }
        addItemButton.addEventListener("click", addListItem);

