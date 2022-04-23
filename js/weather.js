const API_KEY = "3ec86a0a89d6e94d14b1d06d3d9fbb8e"

const weather = document.getElementById("weather")
const weatherArea = document.getElementById("weather__area")

const weatherIcon = document.querySelector("#weather__main__weather img")
const weatherDesc = document.querySelector("#weather__main__weather span")
const weatherTemp = document.querySelector("#weather__main__temp__main span:first-child")
const weatherFeel = document.querySelector("#weather__main__temp__main span:last-child")
const weatherMin = document.querySelector("#weather__main__temp__sub__min span:last-child")
const weatherMax = document.querySelector("#weather__main__temp__sub__max span:last-child")
const weatherHum = document.querySelector("#weather__main__temp__sub__hum span:last-child")

const weatherError = document.querySelector("#weather__error")
const weatherErrorButton = weatherError.querySelector("button")

const weatherLoading = document.querySelector("#weather__loading")

weather.classList.add(HIDDEN_CLASSNAME)
weatherError.classList.add(HIDDEN_CLASSNAME)

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        weatherError.classList.add(HIDDEN_CLASSNAME)
        weatherLoading.classList.add(HIDDEN_CLASSNAME)
        weatherArea.innerText = `${data.name}, ${data.sys.country}`
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
        weatherDesc.innerText = data.weather[0].description
        weatherTemp.innerText = `${Math.round(data.main.temp)}°C`
        weatherFeel.innerText = `Feels like: ${Math.round(data.main.feels_like)}°C`
        weatherMin.innerText = `${Math.round(data.main.temp_min)}°C`
        weatherMax.innerText = `${Math.round(data.main.temp_max)}°C`
        weatherHum.innerText = `${Math.round(data.main.humidity)}%`
        weather.classList.remove(HIDDEN_CLASSNAME)
    })
}

function onGeoError(){
    weather.classList.add(HIDDEN_CLASSNAME)
    weatherError.classList.remove(HIDDEN_CLASSNAME)
    weatherLoading.classList.add(HIDDEN_CLASSNAME)
}

weatherErrorButton.addEventListener("click", function(){
    weatherError.classList.add(HIDDEN_CLASSNAME)
    weatherLoading.classList.remove(HIDDEN_CLASSNAME)
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
})
