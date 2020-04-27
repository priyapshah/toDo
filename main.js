// Create a "delete" button and append it to each list item
var myTasks = document.getElementsByTagName("LI");
var currTask;
for (currTask = 0; currTask < myTasks.length; currTask++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteTask";
  span.appendChild(txt);
  myTasks[currTask].appendChild(span);
}

// Click on a delete button to hide the current list item
var deleteTask = document.getElementsByClassName("deleteTask");
var currTask;
for (currTask = 0; currTask < deleteTask.length; currTask++) {
  deleteTask[currTask].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteTask";
  span.appendChild(txt);
  li.appendChild(span);

  for (currTask = 0; currTask < deleteTask.length; currTask++) {
    deleteTask[currTask].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
