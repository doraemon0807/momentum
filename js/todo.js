const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const toDoNone = document.querySelector("#todo__lists h2")

let TODOS_KEY = `todos_${localStorage.getItem(USERNAME_KEY)}`

let toDos = []

let savedToDos = localStorage.getItem(TODOS_KEY)

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteToDo(event){
    let li = event.target.parentElement

    if (li.tagName == "BUTTON"){
        li = event.target.parentElement.parentElement
    }

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos()
    li.remove()
    handleToDoNone()
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id

    const bullet_toDo = document.createElement("div")
    bullet_toDo.id = "todo-list__bullet"

    
    const bullet = document.createElement("div")
    bullet.classList.add("bullet")
    const span = document.createElement("span")
    span.innerHTML = `${newToDo.text}`
    
    bullet_toDo.appendChild(bullet)
    bullet_toDo.appendChild(span)
    
    const button = document.createElement("button")
    button.innerHTML='<i class="far fa-trash-alt" aria-hidden="true"></i>'

    button.addEventListener("click", deleteToDo)

    li.appendChild(bullet_toDo)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
    handleToDoNone()
}

function handleToDoNone(){
    if(toDos.length !== 0){
        toDoNone.classList.add(HIDDEN_CLASSNAME)
    } else {
        toDoNone.classList.remove(HIDDEN_CLASSNAME)
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit)