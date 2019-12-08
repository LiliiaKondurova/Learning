var selected

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
    newTask.setAttribute('draggable','true')
    newTask.setAttribute('ondragend','dragEnd()')
    newTask.setAttribute('ondragover','dragOver(event)')
    newTask.setAttribute('ondragstart','dragStart(event)')
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
    var elements=createTasksList()
    var newTask = elements[0]
    var newTaskDelete = elements[3]
    var newTaskCheckbox=elements[1]
    var newTaskText= elements[2]
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
function isBefore(listItem1, listItem2) {
  var cur
  if (listItem2.parentNode === listItem1.parentNode) {
    for (cur = listItem1.previousSibling; cur; cur = cur.previousSibling) {
      if (cur === listItem2){
        return true
      }
    }
  } else {
    return false;
  }
}
function dragStart(event) {
  event.dataTransfer.effectAllowed = "move"
  event.dataTransfer.setData("text/plain", null)
  selected = event.target
}
function dragOver(event) {
  if(event.target.tagName==='LI'){
    if (isBefore(selected, event.target)) {
      event.target.parentNode.insertBefore(selected, event.target)
    } else {
      event.target.parentNode.insertBefore(selected, event.target.nextSibling)
    }
  }
}
function dragEnd() {
  selected = null
}