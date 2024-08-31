const add = document.getElementById("add")
const btnAdd = document.getElementById("btnAdd")
const list = document.getElementById("List")

btnAdd.addEventListener("click", (e) => {
    e.preventDefault()

    if(add.value.trim() == ""){
       alert("Please add a Value")
    } else{
        const listItem = document.createElement("li")

        listItem.innerHTML = add.value
        list.appendChild(listItem)

        let icon = document.createElement('i')
        icon.className = 'fas fa-xmark'
        listItem.appendChild(icon)
        
        
        listItem.onclick = () => {
            listItem.classList.toggle('checked')
            saveData()
        }
    
        icon.onclick = () => {
            icon.parentElement.remove()
            saveData()
        }
    }
    add.value = ""
    saveData()
})

function saveData() {
    const items = [];
    list.querySelectorAll("li").forEach(item => {
        items.push({
            text: item.firstChild.textContent,
            checked: item.classList.contains('checked')
        });
    });
    localStorage.setItem('data', JSON.stringify(items));
}

// Show saved items from localStorage
function showData() {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    data.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.text;
        if (item.checked) listItem.classList.add("checked");
        const icon = document.createElement('i');
        icon.className = 'fas fa-xmark';
        listItem.appendChild(icon);
        list.appendChild(listItem);

        // Add event listener to toggle the 'checked' class
        listItem.addEventListener("click", () => {
            listItem.classList.toggle("checked");
            saveData();
        });

        // Add event listener to remove the item
        icon.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up to the list item
            listItem.remove();
            saveData();
        });
    });
}

// Initialize list from localStorage
showData();
