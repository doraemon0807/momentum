const images = ["0_background.jpg", "1_background.jpg", "2_background.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`

bgImage.id = "background-image"
bgImage.classList.add(FADEIN_CLASSNAME)