const todoForm = document.querySelector('form');
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('ul');
let thingsTodo = [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todo = todoInput.value;
    if (thingsTodo.length < 5) {
    thingsTodo.push(todo);    
    }
    console.log(thingsTodo);
    todoInput.value = '';
    renderTodoList();
})

function renderTodoList() {
    const template = thingsTodo.map(item => `<li>${item}</li>`);
    todoList.innerHTML = template.join('');
}

