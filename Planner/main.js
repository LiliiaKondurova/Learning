function addTask(){
    var newTask = document.createElement('li');
    newTask.innerHTML = document.getElementById('taskField').value;
    document.getElementById('todoList').appendChild(newTask);
    document.getElementById('taskField').value="";
}