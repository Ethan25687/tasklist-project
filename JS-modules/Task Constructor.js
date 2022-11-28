addTask = (task) => {
    const taskHTML =
        '<div class="taskbox" id="taskWrap" style="width: 20rem;">\n' +
        '    <div>\n' +
        '        <h2><b>Task:</b> '+task.taskName+'</h2>\n' +
        '        <p><b>Description:</b> '+task.taskDescription+'</p>\n' +
        '        <p><b>Assigned to:</b> '+task.taskAssignedTo+'</p>\n' +
        '        <p><b>Due date:</b> '+task.taskDueDate+'</p>\n' +
        '        <p><b>Status:</b> '+task.taskStatus+'</p>\n' +
        '        <button class="delete">DELETE TASK</button>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const taskContainer = document.getElementById("taskcont");
    taskContainer.innerHTML += taskHTML;
};

// Use following code to test rendering of tasks
/*
addTask({
    'taskName':'Get Tea',
    'taskDescription':'Get Raspberry Black Tea, Yum!',
    'taskAssignedTo':'Ethan',
    'taskDueDate':'testdate',
    'taskStatus':'DONE'
});
*/
//Below code is the values of inputs in form
//To get const value add .value to input eg( inputTask.value)
//except for inputRad as it does not need .value eg ( inputRad )

let inputTask = document.getElementById("taskn");
let inputDesc = document.getElementById("taskdesc");
let inputAss = document.getElementById("assign");
let inputDate = document.getElementById("dater");
let inputRad = null

//runs fnd005 which changes inputRad to checked button
let radbtns = document.getElementsByClassName("status");
for (var i=0; i<radbtns.length; i++) {
    radbtns[i].addEventListener("click", fnd005);
}


function fnd005() {
 let toDoch = document.getElementById("stat1");
 let inProgch = document.getElementById("stat2");
 let toBeRevch = document.getElementById("stat3");
 let dunch = document.getElementById("stat4");

 if (toDoch.checked === true) { 
   inputRad = document.getElementById("stat1").value;
 } else if (inProgch.checked === true) {
   inputRad = document.getElementById("stat2").value;
 } else if (toBeRevch.checked === true) {
   inputRad = document.getElementById("stat3").value;
 } else if(dunch.checked === true) {
   inputRad = document.getElementById("stat4").value;
} else {
   inputRad = null;
 };

 return inputRad
};

//code below just for checking if its working
//setInterval(()=>{console.log(inputRad)}, 2000);

/*
window.onload = loadTasks;

function loadTasks(){
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    

    tasks.forEach(task => {
        const list = document.querySelector("taskcont");
        const li = document.querySelector("taskL");
        getAllInputs();
        taskL.innerHTML= '';

        list.insertBefore(li, list.children[0]);
    });
}
*/


/*
window.onload = loadTasks;

function loadTasks() {
  // Get the tasks from localStorage and convert it to an array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // Loop through the tasks and add them to the list
  tasks.forEach(task => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
          <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
          <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
  });
}
*/


const getAllInputs = () =>{
    let taskNameIn= inputTask.value;
    let taskDescIn=  inputDesc.value;
    let taskAssIn= inputAss.value;
    let taskDueIn= inputDate.value;
    let taskStatIn= inputRad;
    const taskInput = {

    'taskName': taskNameIn,
    'taskDescription': taskDescIn,
    'taskAssignedTo': taskAssIn,
    'taskDueDate': taskDueIn,
    'taskStatus': taskStatIn
    }
    return taskInput;
}

const clearForm = () =>{
    inputTask.value = '';
    inputDesc.value = '';
    inputAss.value = '';
    inputDate.value= '';
}

document.getElementById("subvin").onclick = (e) =>{
    e.preventDefault();
    addTask(getAllInputs());
    clearForm();
}

