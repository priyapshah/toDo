// Create a "delete" button
var currTasks = document.getElementsByTagName("LI");
var curr;
for (curr = 0; curr < currTasks.length; curr++) {
  var span = document.createElement("SPAN");
  var del = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(del);
  currTasks[curr].appendChild(span);
}

// Click on a close button to hide the current list item
var delete = document.getElementsByClassName("delete");
var curr;
for (curr = 0; curr < delete.length; curr++) {
  delete[curr].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol
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
  var del = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(del);
  li.appendChild(span);

  for (curr = 0; curr < delete.length; curr++) {
    delete[curr].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
