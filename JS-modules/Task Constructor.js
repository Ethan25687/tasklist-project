let taskArray = [];
var retrievedTask = JSON.parse(localStorage.getItem("savedTask")) || [];
const loadTasks = () => {
  let taskArray = retrievedTask;
  taskArray.forEach(taskItem => addTask(taskItem));
};


addTask = (task) => {
  const taskHTML =
    '<div class="taskbox" id="taskWrap" style="width: 20rem;">\n' +
    '    <div>\n' +
    '        <h2><b>Task:</b> ' + task.taskName + '</h2>\n' +
    '        <p><b>Description:</b> ' + task.taskDescription + '</p>\n' +
    '        <p><b>Assigned to:</b> ' + task.taskAssignedTo + '</p>\n' +
    '        <p><b>Due date:</b> ' + task.taskDueDate + '</p>\n' +
    '        <p><b>Status:</b> ' + task.taskStatus + '</p>\n' +
    '        <button class="delete">DELETE TASK</button>\n' +
    '        <button class="complete">COMPLETE TASK</button>\n' +
    '    </div>\n' +
    '</div>\n';
  const taskContainer = document.getElementById("taskcont");
  taskContainer.innerHTML += taskHTML;
};
window.onload = loadTasks();

let inputTask = document.getElementById("taskn");
let inputDesc = document.getElementById("taskdesc");
let inputAss = document.getElementById("assign");
let inputDate = document.getElementById("dater");
let inputRad = null

//runs fnd005 which changes inputRad to checked button
let radbtns = document.getElementsByClassName("status");
for (var i = 0; i < radbtns.length; i++) {
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
  } else if (dunch.checked === true) {
    inputRad = document.getElementById("stat4").value;
  } else {
    inputRad = null;
  };

  return inputRad
};

const getAllInputs = () => {
  let taskNameIn = inputTask.value;
  let taskDescIn = inputDesc.value;
  let taskAssIn = inputAss.value;
  let taskDueIn = inputDate.value;
  let taskStatIn = inputRad;
  const taskInput = {

    'taskName': taskNameIn,
    'taskDescription': taskDescIn,
    'taskAssignedTo': taskAssIn,
    'taskDueDate': taskDueIn,
    'taskStatus': taskStatIn
  }
  return taskInput;
}

const clearForm = () => {
  inputTask.value = '';
  inputDesc.value = '';
  inputAss.value = '';
  inputDate.value = '';
}


document.getElementById("subvin").onclick = (e) => {
  e.preventDefault();
  addTask(getAllInputs());
  let taskArray = retrievedTask;
  const updateTaskArray = () => {
    taskArray.push(getAllInputs());
  }
  updateTaskArray();
  clearForm();

  localStorage.setItem("savedTask", JSON.stringify(taskArray));
}

//code for delete btn below

document.getElementById("subvin").addEventListener("click", delThisTask);
window.addEventListener('load', delThisTask);
function delThisTask() {
  let delThisNow = document.getElementsByClassName("delete");
  for (var i=0; i<delThisNow.length; i++) {
    delThisNow[i].addEventListener("click", delCrntTsk);
  };
};


function delCrntTsk() {
  //Gets the value of the taskname input on page.
  let aqTrgt = this.parentNode.firstElementChild.innerHTML;
  let getTrgt = aqTrgt.replace('<b>Task:</b> ','')
  console.log(getTrgt);
  //Gets the array location of the object matching getTrgt.
  let aim = retrievedTask.findIndex(object => {
    return object.taskName === getTrgt;
  });
  
  console.log(aim);
  retrievedTask.splice(aim, 1);
  
  //Below removes the task from view.
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  //below sends the modified array to local storage.
  localStorage.setItem("savedTask",JSON.stringify(retrievedTask));
};

// Complete Task button function

document.getElementById("subvin").addEventListener("click", completeTsk);

function completeTsk() {
  let completeTskBtn = document.getElementsByClassName("complete");
  for (var i = 0; i < completeTskBtn.length; i++) {
    completeTskBtn[i].addEventListener("click", UpdateTskToComplete);
  };
};

function UpdateTskToComplete() {
  this.parentNode.childNodes[9].innerHTML = '<b>Status:</b> Completed</p>';
}