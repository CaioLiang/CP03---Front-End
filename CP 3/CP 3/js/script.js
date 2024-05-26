const form = document.querySelector("#todo-form")
const tarefa = document.querySelector("#new-task")

console.log(form, tarefa)

//evento
form.addEventListener("submit", (event) => {
    event.preventDefault();
})