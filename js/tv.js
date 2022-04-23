const tvSeries = [
    {
    title: "Grey's Anatomy",
    year: "2005",
    summary: "Intern (and eventual resident) Meredith Grey finds herself caught up in personal and professional passions with fellow doctors at a Seattle hospital.",
    link: "https://www.netflix.com/ca/title/70140391",
    starring: "Ellen Pompeo, Sandra Oh, Katherine Heigl",
    image: "0.jpg",
},
{
    title: "The Office",
    year: "2005",
    summary: "This hit comedy chronicles the foibles of disgruntled office workers -- led by deluded boss Michael Scott -- at the Dunder Mifflin paper company.",
    link: "https://www.netflix.com/ca/title/70136120",
    starring: "Steve Carell, John Krasinski, Jenna Fischer",
    image: "1.jpg",
},
{
    title: "Squid Game",
    year: "2021",
    summary: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    link: "https://www.netflix.com/ca/title/81040344",
    starring: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun",
    image: "2.jpg",
},
{
    title: "Gilmore Girls",
    year: "2000",
    summary: "Fiercely independent single mom Lorelai raises gifted, Ivy League-bound daughter Rory amid a continual stream of quick-witted repartee.",
    link: "https://www.netflix.com/ca/title/70155618",
    starring: "Lauren Graham, Alexis Bledel, Scott Patterson",
    image: "3.jpg",
},
{
    title: "Brooklyn Nine-Nine",
    year: "2013",
    summary: "Brilliant but immature Brooklyn detective Jake Peralta must learn to follow the rules and be a team player when his squad gets an exacting new captain.",
    link: "https://www.netflix.com/ca/title/70281562",
    starring: "Andy Samberg, Andre Braugher, Stephanie Beatriz",
    image: "4.jpg",
},
{
    title: "Seinfeld",
    year: "1989",
    summary: 'The "show about nothing" is a sitcom landmark, with comic Jerry and his three sardonic friends finding laughs in both the mundane and the ridiculous.',
    link: "https://www.netflix.com/ca/title/70153373",
    starring: "Jerry Seinfeld, Julia Louis-Dreyfus, Jason Alexander",
    image: "5.jpg",
},
{
    title: "Prison Break",
    year: "2005",
    summary: "When his brother is wrongly convicted of murder, a structural engineer resolves to bust his sibling out of the notorious Fox River State Penitentiary.",
    link: "https://www.netflix.com/ca/title/70140425",
    starring: "Wentworth Miller, Dominic Purcell, Amaury Nolasco",
    image: "6.jpg",
},
{
    title: "Stranger Things",
    year: "2016",
    summary: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    link: "https://www.netflix.com/ca/title/80057281",
    starring: "Winona Ryder, David Harbour, Finn Wolfhard",
    image: "7.jpg",
},
{
    title: "Hotel Del Luna",
    year: "2019",
    summary: "When he's invited to manage a hotel for dead souls, an elite hotelier gets to know the establishment's ancient owner and her strange world.",
    link: "https://www.netflix.com/ca/title/81205849",
    starring: "Lee Ji-eun, Yeo Jin-goo, Shin Jung-geun",
    image: "8.jpg",
},
{
    title: "Breaking Bad",
    year: "2008",
    summary: "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
    link: "https://www.netflix.com/ca/title/70143836",
    starring: "Bryan Cranston, Aaron Paul, Anna Gunn",
    image: "9.jpg",
    },
]

const tv = document.getElementById("tv")

const tvPoster = document.getElementById("tv__poster")
const tvPosterImage = document.createElement("img")

const tvInfo = document.getElementById("tv__info")
const tvTitle = document.querySelector("#tv__info__title span")
const tvYear = document.querySelector("#tv__info__year span")
const tvSummary = document.querySelector("#tv__info__summary span")
const tvStarring = document.querySelector("#tv__info__starring span")

const tvLink = document.createElement("a")

function updateSeries(){

    const todaysTv = tvSeries[Math.floor(Math.random()*tvSeries.length)]

    if (todaysTv.title == tvTitle.innerText) {
        updateSeries()
        return
    }

    tvPosterImage.src = `img/${todaysTv.image}`
    
    tvTitle.innerText = todaysTv.title
    tvYear.innerText = todaysTv.year
    tvSummary.innerText = todaysTv.summary
    tvStarring.innerText = todaysTv.starring

    tvLink.href = todaysTv.link
    tvLink.target = "_blank"
    tvLink.innerText = `Watch this series on Netflix!`

    tvPoster.appendChild(tvPosterImage)
    tvInfo.appendChild(tvLink)

}
updateSeries()
setInterval(()=>{
    tv.classList.remove(FADEIN_CLASSNAME)
    tv.classList.add(FADEOUT_CLASSNAME)
    setTimeout(()=>{
        tv.classList.remove(FADEOUT_CLASSNAME)
        tv.classList.add(FADEIN_CLASSNAME)
        updateSeries()
    }, 1000)
}, 10000)