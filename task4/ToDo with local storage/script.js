const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');

window.addEventListener('load', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskElement(task);
    });
});

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = { id: Date.now(), text: taskText };
        addTaskElement(task);
        saveTask(task);
        taskInput.value = '';
    }
}

function addTaskElement(task) {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    li.innerHTML = `<span>${task.text}</span>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>`;
    
    const editBtn = li.querySelector('.edit');
    const deleteBtn = li.querySelector('.delete');
    
    editBtn.addEventListener('click', () => editTask(task.id));
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    
    taskList.appendChild(li);
}

function deleteTask(id) {
    const li = document.querySelector(`li[data-id="${id}"]`);
    li.remove();
    removeTaskFromLocalStorage(id);
}

function editTask(id) {
    const li = document.querySelector(`li[data-id="${id}"]`);
    const taskText = li.querySelector('span').textContent;
    const newText = prompt('Edit task:', taskText);
    if (newText !== null && newText.trim() !== '') {
        li.querySelector('span').textContent = newText.trim();
        updateTaskInLocalStorage(id, newText.trim());
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInLocalStorage(id, newText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.text = newText;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}