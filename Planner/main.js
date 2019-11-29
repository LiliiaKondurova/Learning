function addTask(){
    var newTask = document.createElement('li');
    var newTaskText=document.createElement('span');
    var newTaskCheckbox=document.createElement('input');
    var newTaskClose=document.createElement('i');
    newTaskCheckbox.setAttribute('type','checkbox');
    newTaskClose.setAttribute('class','material-icons');
    newTaskClose.innerHTML='close';
    newTaskText.innerHTML = document.getElementById('taskField').value;
    document.getElementById('todoList').appendChild(newTask);
    newTask.appendChild(newTaskCheckbox);
    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskClose);
    document.getElementById('taskField').value="";
}