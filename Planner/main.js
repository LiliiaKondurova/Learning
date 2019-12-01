function addTask(){
    let newTask = document.createElement('li');
    let newTaskText=document.createElement('span');
    let newTaskCheckbox=document.createElement('input');
    let newTaskDelete=document.createElement('i');
    newTaskCheckbox.setAttribute('type','checkbox');
    newTaskDelete.setAttribute('class','material-icons');
    newTaskDelete.innerHTML='close';
    newTaskText.innerHTML = document.getElementById('taskField').value;
    document.getElementById('todoList').appendChild(newTask);
    newTask.appendChild(newTaskCheckbox);
    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskDelete);
    let deleteTask = function () { 
        alert("Are you sure you want to delete this task?"); 
        newTask.parentNode.removeChild(newTask);   
    }
    newTaskDelete.onclick = deleteTask;
    document.getElementById('taskField').value="";
}