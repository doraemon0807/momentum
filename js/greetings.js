// const loginForm = document.querySelector("#login-form")
const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")

const greetings = document.getElementById("greetings")

const weatherFrame = document.getElementById("weather_frame")
const dateFrame = document.getElementById("date_frame")
const todoFrame = document.getElementById("todo_frame")
const quoteFrame = document.getElementById("quote_frame")
const bookmarkFrame = document.getElementById("bookmark_frame")
const musicFrame = document.getElementById("music_frame")
const logoutFrame = document.getElementById("logout_frame")

const main = document.getElementById("main")


const HIDDEN_CLASSNAME = "hidden"
const NODISPLAY_CLASSNAME = "noDisplay"
const USERNAME_KEY = "username"
const FADEINOUT_CLASSNAME = "fade_in_out"
const FADEIN_CLASSNAME = "fadeIn"


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
    

    setTimeout(function(){

        weatherFrame.classList.remove(HIDDEN_CLASSNAME)
        weatherFrame.classList.add("slide-in-left")
        dateFrame.classList.remove(HIDDEN_CLASSNAME)
        dateFrame.classList.add("slide-in-bottom")
        todoFrame.classList.remove(HIDDEN_CLASSNAME)
        todoFrame.classList.add("slide-in-right")
        quoteFrame.classList.remove(HIDDEN_CLASSNAME)
        quoteFrame.classList.add("slide-in-left")
        bookmarkFrame.classList.remove(HIDDEN_CLASSNAME)
        bookmarkFrame.classList.add("slide-in-bottom")
        musicFrame.classList.remove(HIDDEN_CLASSNAME)
        musicFrame.classList.add("slide-in-right")
        logoutFrame.classList.remove(HIDDEN_CLASSNAME)
        logoutFrame.classList.add("slide-in-left")

        // bgImage.classList.remove(NODISPLAY_CLASSNAME)
        // quote.classList.remove(NODISPLAY_CLASSNAME)
        // author.classList.remove(NODISPLAY_CLASSNAME)

        // clock.classList.add(FADEIN_CLASSNAME)
        // clock.classList.remove(NODISPLAY_CLASSNAME)

        // toDoForm.classList.add(FADEIN_CLASSNAME)
        // toDoForm.classList.remove(NODISPLAY_CLASSNAME)

        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
    }, 0)

    // setTimeout(function(){
    //     bgImage.classList.remove(NODISPLAY_CLASSNAME)
    //     quote.classList.remove(NODISPLAY_CLASSNAME)
    //     author.classList.remove(NODISPLAY_CLASSNAME)
    // }, 1000)
    
    // setTimeout(function(){
    //     clock.classList.add(FADEIN_CLASSNAME)
    //     clock.classList.remove(NODISPLAY_CLASSNAME)
    // }, 3000)
    
    // setTimeout(function(){
    //     toDoForm.classList.add(FADEIN_CLASSNAME)
    //     toDoForm.classList.remove(NODISPLAY_CLASSNAME)
    // }, 4000)
    
    // setTimeout(function(){
    //     navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
    //     }, 5000)


    //add script js files to HTML
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings()
}