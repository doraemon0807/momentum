// const loginForm = document.querySelector("#login-form")
const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")

const greetings = document.getElementById("greetings")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"



function onLoginSubmit(event){
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    paintGreetings()

    setTimeout(function(){
        bgImage.classList.remove(HIDDEN_CLASSNAME)
        quote.classList.remove(HIDDEN_CLASSNAME)
        author.classList.remove(HIDDEN_CLASSNAME)
        }, 2000)

    setTimeout(function(){
        clock.classList.remove(HIDDEN_CLASSNAME)
        }, 3000)
        
    setTimeout(function(){
        toDoForm.classList.remove(HIDDEN_CLASSNAME)
        }, 4000)
    
    setTimeout(function(){
        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
        }, 5000)
        
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greetings.innerText = `Hello ${username}!`
    greetings.classList.remove(HIDDEN_CLASSNAME)
    //add script js files to HTML
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings()
}