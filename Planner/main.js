function taskText(){
    return document.getElementById('taskField')
}
function tasksList(){
    return document.getElementById('todoList')
}
function completedTasks(){
    return document.getElementById('completedTasks')
}
function createTasksList(){
    var newTask = document.createElement('li')
    var newTaskText=document.createElement('span')
    var newTaskCheckbox=document.createElement('input')
    var newTaskDelete=document.createElement('i')
    newTaskCheckbox.setAttribute('type','checkbox')
    newTaskDelete.setAttribute('class','material-icons')
    newTaskDelete.innerHTML='close'
    newTaskText.innerHTML = taskText().value
    return [newTask,newTaskCheckbox,newTaskText,newTaskDelete]
}
function addTaskStructure(task,element){
    return task.appendChild(element);
}
function addTask(){
    var newTask = createTasksList()[0]
    var newTaskDelete = createTasksList()[3]
    var newTaskCheckbox=createTasksList()[1]
    var newTaskText= createTasksList()[2]
    tasksList().appendChild(newTask)
    newTask.appendChild(newTaskCheckbox)
    newTask.appendChild(newTaskText)
    newTask.appendChild(newTaskDelete)
    newTaskDelete.onclick = function() {
        alert('Are you sure you want to delete this task?')
        newTask.parentNode.removeChild(newTask)
    }
    newTaskCheckbox.onchange = function () {
            if (newTaskCheckbox.checked===true){
                newTask.parentNode.removeChild(newTask)
                completedTasks().appendChild(newTask)
            } else {
                completedTasks().removeChild(newTask)
                tasksList().appendChild(newTask)
            }
    }
    taskText().value=""
}