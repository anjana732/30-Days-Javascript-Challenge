//Activity 1 : Understanding Local Storage
/*********************************** TASK 1 ***********************************/
import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');

localStorage.setItem('username', 'Anjana');
const data = localStorage.getItem('username');
console.log(data);
