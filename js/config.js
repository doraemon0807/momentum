const logoutFrame = document.getElementById("logout_frame")
const darkModeFrame = document.getElementById("dark-mode_frame")

const frames = document.getElementsByClassName("frame--style")
const titles = document.getElementsByClassName("gadget__title--style")
const toDoLists = document.getElementById("todo__lists")


darkModeFrame.addEventListener("click", ()=>{
    const darkModeIcon = darkModeFrame.querySelector("i")
        
    darkModeIcon.classList.toggle("fa-sun")
    darkModeIcon.classList.toggle("fa-moon")
    
    for(let i = 0; i < frames.length; i++){
        frames[i].classList.toggle("light-mode")
        frames[i].classList.toggle("dark-mode")
    }    
    for(let i = 0; i < titles.length; i++){
        titles[i].classList.toggle("light-mode")
        titles[i].classList.toggle("dark-mode")
    }

    toDoLists.classList.toggle("todo-light-mode")
    toDoLists.classList.toggle("todo-dark-mode")

})

logoutFrame.addEventListener("click", ()=>{
    if (confirm("Are you sure you want to log out?") == true){
        alert("See you again!")
        localStorage.removeItem(USERNAME_KEY)

        setTimeout(()=>{
        weatherFrame.classList.remove("slide-in-left")
        dateFrame.classList.remove("slide-in-bottom")
        todoFrame.classList.remove("slide-in-right")
        tvFrame.classList.remove("slide-in-left")
        logoutFrame.classList.remove("slide-in-left")
        darkModeFrame.classList.remove("slide-in-right")

        weatherFrame.classList.add("slide-out-left")
        dateFrame.classList.add("slide-out-bottom")
        todoFrame.classList.add("slide-out-right")
        tvFrame.classList.add("slide-out-left")
        logoutFrame.classList.add("slide-out-left")
        darkModeFrame.classList.add("slide-out-right")
        greetings.classList.add("slide-out-top")
        }, 1000)

        setTimeout(()=>{
            location.reload()
        }, 2000)

    }
})



for(let i = 0; i < frames.length; i++){
    frames[i].classList.add("light-mode")
}

for(let i = 0; i < titles.length; i++){
    titles[i].classList.add("light-mode")
}

toDoLists.classList.add("todo-light-mode")


