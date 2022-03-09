const quotes = [
    {
    quote: "If our lives are already written, it would take a courageous man to change the script.",
    author: "Alan Wake",
    image: "0_background.jpg",
},
{
    quote: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take inventory",
    author: "Call Of Duty: Modern Warfare 2",
    image: "1_background.jpg",
},
{
    quote: "Men are but flesh and blood. They know their doom, but not the hour.",
    author: "The Elder Scrolls 4: Oblivion",
    image: "2_background.jpg",
},
{
    quote: "Once you believe, the truth and a lie are quite the same thing. Let your heart decide. It's in your heart you must confide...",
    author: "Kingdom Hearts 358/2 Days",
    image: "3_background.jpg",
},
{
    quote: "We all make choices, but in the end... our choices make us.",
    author: "Andrew Ryan, 'Bioshock",
    image: "4_background.jpg",
},
{
    quote: "A hero need not speak. When he is gone, the world will speak for him.",
    author: "Halo 3",
    image: "5_background.jpg",
},
{
    quote: "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.",
    author: "God Of War 3",
    image: "6_background.jpg",
},
{
    quote: "You can’t break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.",
    author: "Far Cry 2",
    image: "7_background.jpg",
},
{
    quote: "A sword wields no strength unless the hands that holds it has courage.",
    author: "Legend of Zelda: Twilight Princess",
    image: "8_background.jpg",
},
{
    quote: "Even in dark times, we cannot relinquish the things that make us human.",
    author: "Metro 2033",
    image: "9_background.jpg",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const bgImage = document.createElement("img")



function updateQuote(){
    
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
    bgImage.src = `img/${todaysQuote.image}`
    
    quote.innerText = todaysQuote.quote
    author.innerText = todaysQuote.author

    document.body.appendChild(bgImage)
}
bgImage.id = "background_image"

bgImage.classList.add("fade_in_out")
author.classList.add("fade_in_out")
quote.classList.add("fade_in_out")

updateQuote()
setInterval(updateQuote, 20000)

if (savedUsername === null){
    bgImage.classList.add(HIDDEN_CLASSNAME)
    quote.classList.add(HIDDEN_CLASSNAME)
    author.classList.add(HIDDEN_CLASSNAME)

} else{
    bgImage.classList.remove(HIDDEN_CLASSNAME)
    quote.classList.remove(HIDDEN_CLASSNAME)
    author.classList.remove(HIDDEN_CLASSNAME)
}