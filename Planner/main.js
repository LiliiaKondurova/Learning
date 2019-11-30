function addTask(){
    var newTask = document.createElement('li');
    var newTaskText=document.createElement('span');
    var newTaskCheckbox=document.createElement('input');
    var newTaskClose=document.createElement('i');
    newTaskCheckbox.setAttribute('type','checkbox');
    newTaskClose.setAttribute('class','material-icons');
    newTaskClose.setAttribute('onclick','removeListItem()');
    newTaskClose.innerHTML='close';
    newTaskText.innerHTML = document.getElementById('taskField').value;
    document.getElementById('todoList').appendChild(newTask);
    newTask.appendChild(newTaskCheckbox);
    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskClose);
    document.getElementById('taskField').value="";
}

function removeListItem(){
    var items=document.getElementsByTagName('li');
    var tab=[];
    var liIndex;
    for (var i=0; i<items.length; i++){
        tab.push(items[i].innerHTML);
    }
    for (var i=0; i<items.length; i++){
        items[i].onclick=function(){
            liIndex=tab.indexOf(this.innerHTML);
            items[liIndex].parentNode.removeChild(items[liIndex]);
        }
    }
}