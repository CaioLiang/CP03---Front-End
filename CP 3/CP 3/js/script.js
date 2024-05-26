const Todoform = document.querySelector("#todo-form")
const tarefa = document.querySelector("#new-task")
var keyDelete = 0



Todoform.addEventListener("submit", (event) => {
    event.preventDefault();
    
    keyDelete++
    
    var tarefaFormatado = keyDelete + ' - ' + tarefa.value
    const valueTask = tarefaFormatado

    const addDiv = document.createElement("div")
    addDiv.classList.add("list-task")
    
    const addText = document.createElement("h3")
    addText.innerText = valueTask;
    addDiv.appendChild(addText)
    Todoform.appendChild(addDiv) 
    
    localStorage.setItem(keyDelete, tarefa.value)
    
    tarefa.value = ""
    tarefa.focus();

})