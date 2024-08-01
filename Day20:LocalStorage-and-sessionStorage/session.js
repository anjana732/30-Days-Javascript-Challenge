

sessionStorage.setItem('name','Anjana singh');
console.log(sessionStorage.getItem('name'));

const user = {
    name : "Anjana",
    email : "anjana@gmail.com"
}

const userJson = JSON.stringify(user);
sessionStorage.setItem('user',userJson);

const getUserJson = sessionStorage.getItem('user');
const userJsonRes = JSON.parse(getUserJson)
console.log(`Name: ${userJsonRes.name} and email : ${userJsonRes.email}`)

//TASK 8
sessionStorage.removeItem('user');
console.log(sessionStorage.getItem('user'))

//TASK 10

function saveUserPreference(preferenceKey, preferenceValue) {
    localStorage.setItem(preferenceKey, preferenceValue);
    sessionStorage.setItem(preferenceKey, preferenceValue)
}
saveUserPreference("name", "Ram");

function getUserPreference(preferenceKey) {
    console.log(localStorage.getItem(preferenceKey));
    console.log(sessionStorage.getItem(preferenceKey));
}

getUserPreference("name")

function clearUserPreferences(preferenceKey){
    localStorage.removeItem(preferenceKey);
    sessionStorage.removeItem(preferenceKey);
}
clearUserPreferences("name")
getUserPreference("name")


//Activity 3: Understanding Session

document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom Content loaded");
    const savedData = sessionStorage.getItem('formData');
    console.log(savedData)
    if (savedData) {
        const userData = JSON.parse(savedData);
        document.getElementById('savedName').textContent = `Name: ${userData.name || 'Not set'}`;
        document.getElementById('savedEmail').textContent = `Email: ${userData.email || 'Not set'}`;
    }
});


const form = document.getElementById('userForm');
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const formJson = JSON.stringify(formObject);

    console.log('FormData:', formData);
    console.log('FormObject:', formObject);
    console.log('FormJson:', formJson); 

    sessionStorage.setItem('formData', formJson);

})