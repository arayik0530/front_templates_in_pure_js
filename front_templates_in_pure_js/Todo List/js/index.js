let button = document.getElementById("addButton");
let todoContainer = document.getElementById("todos");
let input = document.getElementById("input");

function add(){
    let value = input.value;
    if(value) {
        let task = document.createElement("div");
        task.id = "task";
        let taskElement = document.createElement('p');
        taskElement.id = 'taskElement';
        taskElement.innerText = value;
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkBox');
        checkBox.addEventListener('change', check);
        let removeButton = document.createElement('button');
        removeButton.addEventListener('click', remove);
        removeButton.classList.add('removeButton');
        removeButton.appendChild(document.createTextNode("\u00D7"));
        task.appendChild(checkBox);
        task.appendChild(taskElement);
        task.appendChild(removeButton);
        todoContainer.appendChild(task);
        input.value = "";
    }
}

function check(){
    if(this.checked){
        this.nextElementSibling.style.textDecoration = 'line-through';
    }
    else{
        this.nextElementSibling.style.textDecoration = 'none';
    }
}

function remove(){
    this.parentElement.style.display = 'none';
}

document.addEventListener('keydown', function (event) {
    if(event.key === 'Enter'){
        add();
    }
})
button.addEventListener("click", add);