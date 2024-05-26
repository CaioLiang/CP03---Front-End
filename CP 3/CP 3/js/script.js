const Todoform = document.querySelector("#todo-form")
const adicionarTarefa = document.querySelector("#new-task")
var keyCount = 0

 while (keyCount < localStorage.length) {
    keyCount++
    const reloadTask = localStorage.getItem(keyCount) 
    
    var adicionarTarefaFormatado = keyCount + ' - ' + reloadTask
    const valueTask = adicionarTarefaFormatado

    const addDiv = document.createElement("div")
    addDiv.classList.add("list-task")
    
    const addText = document.createElement("h3")
    addText.innerText = valueTask;
    addDiv.appendChild(addText)
    Todoform.appendChild(addDiv) 

}

Todoform.addEventListener("submit", (event) => {
    event.preventDefault();
    
    keyCount++
    
    var adicionarTarefaFormatado = keyCount + ' - ' + adicionarTarefa.value
    const valueTask = adicionarTarefaFormatado

    const addDiv = document.createElement("div")
    addDiv.classList.add("list-task")
    
    const addText = document.createElement("h3")
    addText.innerText = valueTask;
    addDiv.appendChild(addText)
    Todoform.appendChild(addDiv) 
    
    localStorage.setItem(keyCount, adicionarTarefa.value)
    
    adicionarTarefa.value = ""
    adicionarTarefa.focus();

})
