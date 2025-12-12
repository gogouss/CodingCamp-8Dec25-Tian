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
            <p class="text-2xl pt-2 text-gray-600">${todo.text}
            <span class="text-xs text-gray-500">${todo.date}</span>
            <button onclick="removeTodo(this)" class="bg-red-500 hover:bg-red-700 text-white rounded text-xl p-1" style="float: right;">x</button>
            </p>
        </li>`;
    });
}

function removeTodo(button) {
    const li = button.closest('li');
    const index = Array.from(li.parentNode.children).indexOf(li);
    todo.splice(index, 1);
    renderTodos();
}

function filterTodos() {
    let sorted = [...todo];

    sorted.sort((a, b) => new Date(a.date) - new Date(b.date));

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    sorted.forEach(todo => {
        todoList.innerHTML += `
         <li>
            <p class="text-2xl pt-2 text-gray-600">${todo.text}
            <span class="text-xs text-gray-500">${todo.date}</span>
            <button onclick="removeTodo(this)" class="bg-red-500 hover:bg-red-700 text-white rounded text-xl p-1" style="float: right;">x</button>
            </p>
        </li>`;
    });
}