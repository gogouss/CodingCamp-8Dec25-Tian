let todo = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');


if (todoInput.value === '' || todoDate.value === '') {
        alert('Please enter a todo item and select a date.');
        return;
    } else {
        const todoObj = {
            text: todoInput.value,
            date: todoDate.value,
        }
        todo.push(todoObj);

        renderTodos();
        todoInput.value ='';
        todoDate.value = '';
    }

}
function clearTodos() {
    todo = [];
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';  
    todo.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text}
            <span class="text-sm">${todo.date}</span></p>
        </li>`;
    });
}


function filterTodos() {
    let sorted = [...todo];

    sorted.sort((a, b) => new Date(a.date) - new Date(b.date));

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    sorted.forEach(item => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${item.text}
            <span class="text-sm">${item.date}</span></p>
        </li>`;
    });
}