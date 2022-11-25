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

// placeholder test addTask function

addTask({
    'taskName':'Get Tea',
    'taskDescription':'Raspberry Black Tea, Yum!',
    'taskAssignedTo':'Ethan',
    'taskDueDate':'testdate',
    'taskStatus':'DONE'
});

addTask({
    'taskName':'Get Chips',
    'taskDescription':'Any kind of chips Chips',
    'taskAssignedTo':'Steven, Billy, Cameron',
    'taskDueDate':'testdate',
    'taskStatus':'TODO'
});

addTask({
    'taskName':'Get Chips',
    'taskDescription':'Any kind of chips Chips',
    'taskAssignedTo':'Steven, Billy, Cameron',
    'taskDueDate':'testdate',
    'taskStatus':'TODO'
});

addTask({
    'taskName':'Get Chips',
    'taskDescription':'Any kind of chips Chips',
    'taskAssignedTo':'Steven, Billy, Cameron',
    'taskDueDate':'testdate',
    'taskStatus':'TODO'
});

addTask({
    'taskName':'Get Chips',
    'taskDescription':'Any kind of chips Chips',
    'taskAssignedTo':'Steven, Billy, Cameron',
    'taskDueDate':'testdate',
    'taskStatus':'TODO'
});



//Below code is the values of inputs in form

const input001 = document.getElementById("taskn");
const input002 = document.getElementById("taskdesc");
const input003 = document.getElementById("assign");
const input004 = document.getElementById("dater");
let input005 = null

//runs fnd005 which changes inputoo5 to checkd button
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
   input005 = document.getElementById("stat1").value;
 } else if (inProgch.checked === true) {
   input005 = document.getElementById("stat2").value;
 } else if (toBeRevch.checked === true) {
   input005 = document.getElementById("stat3").value;
 } else if(dunch.checked === true) {
   input005 = document.getElementById("stat4").value;
} else {
   input005 = null;
 };

 return input005
};

//code below just for checking if its working
//setInterval(()=>{console.log(input005)}, 2000);
