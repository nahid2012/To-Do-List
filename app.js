// // const add = document.getElementById("add")
// // const btnAdd = document.getElementById("btnAdd")
// // const list = document.getElementById("List")

// // btnAdd.addEventListener("click", (e) => {
// //     e.preventDefault()

// //     if(add.value.trim() == ""){
// //        alert("Please add a Value")
// //     } else{
// //         const listItem = document.createElement("li")

// //         listItem.innerHTML = add.value
// //         list.appendChild(listItem)

// //         let icon = document.createElement('i')
// //         icon.className = 'fas fa-xmark'
// //         listItem.appendChild(icon)
        
        
// //         listItem.onclick = () => {
// //             listItem.classList.toggle('checked')
// //             saveData()
// //         }
    
// //         icon.onclick = () => {
// //             icon.parentElement.remove()
// //             saveData()
// //         }
// //     }
// //     add.value = ""
// //     saveData()
// // })

// // function saveData() {
// //     const items = [];
// //     list.querySelectorAll("li").forEach(item => {
// //         items.push({
// //             text: item.firstChild.textContent,
// //             checked: item.classList.contains('checked')
// //         });
// //     });
// //     localStorage.setItem('data', JSON.stringify(items));
// // }

// // // Show saved items from localStorage
// // function showData() {
// //     const data = JSON.parse(localStorage.getItem('data')) || [];
// //     data.forEach(item => {
// //         const listItem = document.createElement("li");
// //         listItem.textContent = item.text;
// //         if (item.checked) listItem.classList.add("checked");
// //         const icon = document.createElement('i');
// //         icon.className = 'fas fa-xmark';
// //         listItem.appendChild(icon);
// //         list.appendChild(listItem);

// //         // Add event listener to toggle the 'checked' class
// //         listItem.addEventListener("click", () => {
// //             listItem.classList.toggle("checked");
// //             saveData();
// //         });

// //         // Add event listener to remove the item
// //         icon.addEventListener("click", (e) => {
// //             e.stopPropagation(); // Prevent the click event from bubbling up to the list item
// //             listItem.remove();
// //             saveData();
// //         });
// //     });
// // }

// // // Initialize list from localStorage
// // showData();


// const input = document.getElementById("input")
// const btnAdd = document.getElementById("btnAdd")
// const taskbox = document.getElementById("taskbox")

// function createTask() {
//     if(input.value.trim() === "") {
//         alert("Please add a Value!")
//     } else{
//         const task = document.createElement('li')
//         task.textContent = input.value
//         taskbox.appendChild(task)

//         const icon = document.createElement('i')
//         icon.className = "fas fa-xmark"
//         task.appendChild(icon)

//         task.onclick = () => {
//             task.classList.toggle('checked')
//             saveTasks()
//         }
        
//         icon.onclick = () => {
//             icon.parentElement.remove()
//             saveTasks()
//         }
//     }
//     saveTasks()
//     input.value = ""
// }


// btnAdd.onclick = () => createTask()

// function saveTasks() {
//     const tasks = Array.from(taskbox.children).map(task => ({
//         text: task.textContent.replace('×', '').trim(),
//         isChecked: task.classList.contains('checked')
//     }));
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function loadTasks() {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.forEach(task => createTask(task.text, task.isChecked));
// }



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