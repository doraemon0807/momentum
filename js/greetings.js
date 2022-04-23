// const loginForm = document.querySelector("#login-form")
const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")

const greetings = document.getElementById("greetings")

const weatherFrame = document.getElementById("weather_frame")
const dateFrame = document.getElementById("date_frame")
const todoFrame = document.getElementById("todo_frame")
const tvFrame = document.getElementById("tv_frame")

const main = document.getElementById("main")


const HIDDEN_CLASSNAME = "hidden"
const NODISPLAY_CLASSNAME = "noDisplay"
const USERNAME_KEY = "username"
const FADEIN_CLASSNAME = "fadeIn"
const FADEOUT_CLASSNAME = "fadeOut"


function onLoginSubmit(event){
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    paintGreetings()
}

function paintGreetings(){
        
    const username = localStorage.getItem(USERNAME_KEY)
    greetings.innerText = `Good Day, ${username}!`
    greetings.classList.remove(HIDDEN_CLASSNAME)
    greetings.classList.add("greetingsAnimation")
    
    setTimeout(() => {
        document.body.appendChild(bgImage)
    }, 100);


    setTimeout(function(){
        
        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
        weatherFrame.classList.remove(HIDDEN_CLASSNAME)
        weatherFrame.classList.add("slide-in-left")
        dateFrame.classList.remove(HIDDEN_CLASSNAME)
        dateFrame.classList.add("slide-in-bottom")
        todoFrame.classList.remove(HIDDEN_CLASSNAME)
        todoFrame.classList.add("slide-in-right")
        tvFrame.classList.remove(HIDDEN_CLASSNAME)
        tvFrame.classList.add("slide-in-left")
        logoutFrame.classList.remove(HIDDEN_CLASSNAME)
        logoutFrame.classList.add("slide-in-left")
        darkModeFrame.classList.remove(HIDDEN_CLASSNAME)
        darkModeFrame.classList.add("slide-in-right")

        TODOS_KEY = `todos_${localStorage.getItem(USERNAME_KEY)}`

        savedToDos = localStorage.getItem(TODOS_KEY)

        if(savedToDos !== null){
            const parsedToDos = JSON.parse(savedToDos)
            toDos = parsedToDos
            parsedToDos.forEach(paintToDo)
        }
        
        handleToDoNone()

    }, 3000)

}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings()
}

