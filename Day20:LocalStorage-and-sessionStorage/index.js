document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom Content loaded");
    const savedData = localStorage.getItem('formData');
    console.log(savedData)
    if (savedData) {
        const userData = JSON.parse(savedData);
        document.getElementById('savedName').textContent = `Name: ${userData.name || 'Not set'}`;
        document.getElementById('savedEmail').textContent = `Email: ${userData.email || 'Not set'}`;
    }
});

const form = document.getElementById('userForm');
form.addEventListener('submit', (e) => {
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

    localStorage.setItem('formData', formJson);
});


