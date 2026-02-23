// grab elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// add task on button click
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    // create list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // task text - click to toggle done
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    // delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => {
        li.remove();
    });

    // put together
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';
}