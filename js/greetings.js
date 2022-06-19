const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDDEN_CLASSNAME = "hidden"
const saveUserName = localStorage.getItem("userName");

if(saveUserName === null) {
    loginForm.classList.remove(HIDDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${saveUserName}`;
}

function onLoginSubmit (e) {
    e.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDDEN_CLASSNAME);
    localStorage.setItem("userName", userName);
    greeting.innerText = `Hello, ${userName}`;
    greeting.classList.remove(HIDDDEN_CLASSNAME);
}
