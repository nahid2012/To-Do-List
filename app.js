// const add = document.getElementById("add")
// const btnAdd = document.getElementById("btnAdd")
// const list = document.getElementById("List")

// btnAdd.addEventListener("click", (e) => {
//     e.preventDefault()

//     if(add.value.trim() == ""){
//        alert("Please add a Value")
//     } else{
//         const listItem = document.createElement("li")

//         listItem.innerHTML = add.value
//         list.appendChild(listItem)
//         add.value = ""

//         listItem.onclick = () => {
//             listItem.classList.toggle("clicked")

//             // listItem.onclick = () => {
//             //     listItem.classList.remove("clicked")
//             // }

//             let icon = document.createElement('i')
//             icon.className = 'fas fa-xmark'
//             listItem.appendChild(icon)

//             icon.onclick = (e) => {
//                 e.preventDefault()

//                 function removeSelectedItems() {
//                     const items = Array.from(list.getElementsByTagName('li'));
                    
//                     // Iterate backward to avoid index issues while removing items
//                     let index = items.length;
//                     while (index--) {
//                         if (items[index].classList.contains('clicked')) {
//                             list.removeChild(items[index]);
//                         }
//                     }
//                 }
//                 removeSelectedItems()
//             }
//         }
//     }
// })










  

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
        add.value = ""

        listItem.onclick = () => {
            listItem.classList.toggle("clicked")

            let icon = document.createElement('i')
            icon.className = 'fas fa-xmark'
            listItem.appendChild(icon)

            icon.onclick = (e) => {
                e.stopPropagation()

                list.removeChild(listItem)
            }
        }

        
    }
})