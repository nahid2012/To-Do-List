const input = document.getElementById("input");
const btnAdd = document.getElementById("btnAdd");
const taskbox = document.getElementById("taskbox");

function createTask(text, isChecked = false) {
    const task = document.createElement('li');
    task.textContent = text;
    if (isChecked) {
        task.classList.add('checked');
    }

    const icon = document.createElement('i');
    icon.className = "fas fa-xmark";
    task.appendChild(icon);

    task.onclick = () => {
        task.classList.toggle('checked');
        saveTasks();
    };

    icon.onclick = (e) => {
        e.stopPropagation(); // Prevent triggering the task click event
        task.remove();
        saveTasks();
    };

    taskbox.appendChild(task);
}

function saveTasks() {
    const tasks = Array.from(taskbox.children).map(task => ({
        text: task.textContent.replace('', '').trim(),
        isChecked: task.classList.contains('checked')
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTask(task.text, task.isChecked));
}

btnAdd.onclick = () => {
    if (input.value.trim() === "") {
        alert("Please add a value!");
    } else {
        createTask(input.value);
        saveTasks();
        input.value = "";
    }
};

// Load tasks when the page is loaded
window.onload = loadTasks;