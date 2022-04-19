const clock = document.querySelector("h2#clock")
const time = document.querySelector("h2#today__time")
const day = document.querySelector("h2#today__day")

function getClock(){
    const date = new Date()

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekday = weekdays[date.getDay()]

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = months[date.getMonth()]

    const todaysDate = String(date.getDate()).padStart(2,"0")
    const year = String(date.getFullYear())
    
    day.innerText = weekday
    time.innerText = `${month} ${todaysDate} ${year}`

    // const hours = String(date.getHours()).padStart(2,"0")
    let hours = date.getHours() > 12? date.getHours()-12 : date.getHours()
    if (hours == 0){
        hours = 12
    }
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    const ampm = date.getHours() > 12? "PM" : "AM"

    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`
}

getClock()
setInterval(getClock, 1000)

// clock.classList.add(NODISPLAY_CLASSNAME)