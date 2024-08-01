//Activity 1 : Understanding Local Storage
/*********************************** TASK 1 ***********************************/
import { LocalStorage } from 'node-localstorage';


const localStorage = new LocalStorage('./scratch');

localStorage.setItem('username', 'Anjana');
const data = localStorage.getItem('username');
console.log(data);

/*********************************** TASK 2 ***********************************/

const user = {
    name : "Anjana",
    email : "anjana@gmail.com"
}

const userJson = JSON.stringify(user);
localStorage.setItem('user',userJson);

const getUserJson = localStorage.getItem('user');
const userJsonRes = JSON.parse(getUserJson)
console.log(`Name: ${userJsonRes.name} and email : ${userJsonRes.email}`)

//Activity 2 : Using LocalStorage
/*********************************** TASK 4 ***********************************/

localStorage.removeItem('user')
console.log(localStorage.getItem('user'))


//Activity 3 : Understanding SessionStorage
/*********************************** TASK 4 ***********************************/

sessionStorage.setItem('name','anjana');
console.log(sessionStorage.getItem('name'));