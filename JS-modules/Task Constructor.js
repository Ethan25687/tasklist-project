/*
class TaskManager {
  constructor(task) {
      this._taskId = 0; // Integer
      this._taskName = taskName; // String
      this._taskDescription = taskDescription; // String
      this._taskAssignedTo = taskAssignedTo; // String
      this._taskDueDate = taskDueDate; // Date when task is due
      this._taskStatus = taskStatus; // String (TODO, IN PROGRESS, REVIEW, DONE)
    }

    get taskId() {
      return this._taskId;
    }

    get taskName() {
      return this._taskName;
    }

    get taskDescription() {
        return this._Taskdescription;
    }

    get taskAssignedTo() {
        return this._taskAssignedTo;
    }

    get taskDueDate() {
        return this._taskDueDate;
    }

    get taskStatus() {
        return this._taskStatus;
    }

    getTask() {
        return //a whole bunch of thingssss
    } // WIP

    getAllTaskNames() {
        const allTaskNames = [];
        return allTaskNames.push(taskName())
    }

    getAllTaskStatus() {
        const allTaskStatus = [];
        return allTaskStatus.push(taskStatus())
    }

    addTask() {
        const taskArray = [];
        
    } // WIP

    generateId() { // generates an number out of 0-99999 to give an unique id to a task
        const randomNumber = Math.floor(Math.random()*100000);
        return randomNumber
    }
} 
*/

addTask = (task) => {
    const taskHTML =
        '<div class="taskbox" id="taskWrap" style="width: 20rem;">\n' +
        '    <div>\n' +
        '        <h5 class="card-title"><b>Task:</b> '+task.taskName+'</h5>\n' +
        '        <p><b>Description:</b> '+task.taskDescription+'</p>\n' +
        '        <p><b>Assigned to:</b> '+task.taskAssignedTo+'</p>\n' +
        '        <p><b>Due date:</b> '+task.taskDueDate+'</p>\n' +
        '        <p><b>Status:</b> '+task.taskStatus+'</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const taskContainer = document.getElementById("taskcont");
    taskContainer.innerHTML += taskHTML;
};

// Use following code to test rendering of tasks

addTask({
    'taskName':'Get Tea',
    'taskDescription':'Get Raspberry Black Tea, Yum!',
    'taskAssignedTo':'Ethan',
    'taskDueDate':'testdate',
    'taskStatus':'DONE'
});

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


document.getElementById("subvin").onclick = (e) =>{
    e.preventDefault();
    addTask(getAllInputs());
}

let el= document.getElementById("subvin");