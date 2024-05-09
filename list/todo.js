document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.js-form');
    const input = document.querySelector('.todo-input');
    const todoList = document.querySelector('.js-list');

    let todos = [];

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function deleteTodo(event) {
        const btn = event.target;
        const li = btn.parentNode;
        li.remove();
        todos = todos.filter(todo => todo.id !== parseInt(li.id));
        saveTodos();
    }

    function toggleTodo(event) {
        const checkbox = event.target;
        const li = checkbox.parentNode;
        li.classList.toggle('completed');
        const todo = todos.find(todo => todo.id === parseInt(li.id));
        todo.completed = checkbox.checked;
        saveTodos();
    }

    function addTodoList(todo) {
        const li = document.createElement('li');
        li.id = todo.id;
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="delete-btn">삭제</button>
        `;
        const deleteBtn = li.querySelector('.delete-btn');
        const checkbox = li.querySelector('.todo-checkbox');
        checkbox.addEventListener('change', toggleTodo);
        deleteBtn.addEventListener('click', deleteTodo);
        todoList.appendChild(li);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            const todo = {
                id: Date.now(),
                text: todoText,
                completed: false
            };
            todos.push(todo);
            addTodoList(todo);
            saveTodos();
            input.value = '';
        } else {
            alert('할 일을 입력하세요!');
        }
    }

    function loadTodos() {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos !== null) {
            todos = JSON.parse(savedTodos);
            todos.forEach(todo => addTodoList(todo));
        }
    }

    form.addEventListener('submit', handleSubmit);
    loadTodos();
});
