const Todoform = document.querySelector("#todo-form")
const adicionarTarefa = document.querySelector("#new-task")
var keyCount = 0

//colocando os elementos do localStorage
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

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("button-remove")
    doneBtn.type = 'button'
    doneBtn.innerHTML = '<img src="./img/trash-can.png" class="button-remove" alt="ícone de lixeira">'
    addDiv.appendChild(doneBtn)
}

Todoform.addEventListener("submit", (event) => {
    event.preventDefault();
    
    keyCount++
    
    //criando elementos da lista de tarefas
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

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("button-remove")
    doneBtn.type = 'button'
    doneBtn.innerHTML = '<img src="./img/trash-can.png" class="button-remove" alt="ícone de lixeira">'
    addDiv.appendChild(doneBtn)
})


document.addEventListener("click", (event) => {
    const clickRemove = event.target
    const divProxima  = clickRemove.closest("div")
    
    if(clickRemove.classList.contains("button-remove")){
        divProxima.remove()
    }
})