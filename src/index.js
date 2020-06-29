// import "./style.css";
import "./style.scss";
import moment from "moment";
import 'alpinejs'


console.log("Welcome Fakhri Alauddin");

// serviceApi
import "./js/vanilla"; 



// UsersAPI 
const getUserModule = () =>
  import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});

const fancyFunc = () => {
    console.log('1','2');
    return [1, 2];
  };
  
const [a, b] = fancyFunc();