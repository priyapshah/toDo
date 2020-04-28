//date
const dateDisplay = document.getElementById("date");
const options = {weekday: "long", month : "short", day : "numeric", year : "numeric"};
const today = new Date();

dateDisplay.innerHTML= today.toLocaleDateString("en-US", options)
//retrieves data 
function get_tasks() {
    var tasks = new Array;
    var tasks_str = localStorage.getItem('task');
    if (tasks_str !== null) {
        tasks = JSON.parse(tasks_str); 
    } 
    return tasks;
}
 
//New ToDo
function add() {
    var task = document.getElementById('task').value;
 
    var tasks = get_tasks();
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
 
    show();
 
    return false;
}
 
//Removes Todo
function remove() {
    var id = this.getAttribute('id');
    var tasks = get_tasks();
    tasks.splice(id, 1);
    localStorage.setItem('task', JSON.stringify(tasks));
 
    show();
 
    return false;
}

 
//shows ToDo
function show() {
    var tasks = get_tasks();
 
    var html = '<ul>';
    for(var curr=0; curr<tasks.length; curr++) {
        html += '<li>' + tasks[curr] + '<button class="remove" id="' + curr + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('tasks').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var curr=0; curr < buttons.length; curr++) {
        buttons[curr].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);

//allows user to hit enter
document.addEventListener("keyup", function(event){
    if (event.keyCode == 13){
        var task = document.getElementById('task').value;
 
    var tasks = get_tasks();
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
 
    show();
 
    return false;
    }
});

show();
