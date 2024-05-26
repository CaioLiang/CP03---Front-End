const Todoform = document.querySelector("#todo-form")
const tarefa = document.querySelector("#new-task")

//evento
Todoform.addEventListener("submit", (event) => {
    event.preventDefault();

    const valueTask = tarefa.value

    const addDiv = document.createElement("div")
    addDiv.classList.add("list-task")
    
    const addText = document.createElement("p")
    addText.innerText = valueTask;
    addDiv.appendChild(addText)

    Todoform.appendChild(addDiv) 
})