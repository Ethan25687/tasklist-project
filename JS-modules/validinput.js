// validinput.js = Editors = Billy

window.onload = function() {

  document.getElementById('taskn').addEventListener('focus', checkName);
  document.getElementById('taskn').addEventListener('focusout', checkName);

  document.getElementById('taskdesc').addEventListener('focus', checkDesc);
  document.getElementById('taskdesc').addEventListener('focusout', checkDesc);

  document.getElementById('assign').addEventListener('focus', checkAss);
  document.getElementById('assign').addEventListener('focusout', checkAss);

  document.getElementById('date').addEventListener('change', toDate);

  document.getElementById('subvin').addEventListener('click', selectRadio);

  document.getElementById('subvin').addEventListener('click', jim);

};
 
let jim = () => {
  console.log("Event listener is working!");
};


function checkName() { 
  let nmlength = document.getElementById("taskn").value; 
  const minlength = 1;
  const maxlength = 8;
  console.log('checking');

  if (nmlength< minlength || nmlength> maxlength) { 
      document.getElementById("TNerror").innerHTML =
        "Please put a name for the task between 1 and 8 characters";
      return false;
    } else { 
      document.getElementById("TNerror").innerHTML = "";
      return true;
    }
};

function checkDesc() { 
  let nmlength = document.getElementById("taskdesc").value; 
  const minlength = 1;
  const maxlength = 15;
   
  if (nmlength< minlength || nmlength> maxlength) { 
    document.getElementById("TDerror").innerHTML =
    "Please input a description for the task between 1 and 15 characters";
   return false;
  } else { 
    document.getElementById("TDerror").innerHTML = "";
   return true;
  }
};

function checkAss() { 
  let nmlength = document.getElementById("assign").value; 
  const minlength = 1;
  const maxlength = 8;
   
  if (nmlength< minlength || nmlength> maxlength) { 
   document.getElementById("assError").innerHTML =
    "Field should contain between 1 and 8 characters";
   return false;
  } else { 
    document.getElementById("assError").innerHTML = "";
   return true;
  }
};


function toDate() {
  let today = new Date();

  let sugDate =new Date(document.getElementById("date").value);

  if (sugDate < today) {
    document.getElementById("dateError").innerHTML = 
    "Cannot select a date that has already passed"
    return false;
  } else {
    document.getElementById("dateError").innerHTML = ""
    return true;
  }
};

function selectRadio() {
let toDo = document.getElementById("stat1").checked;
let inProg = document.getElementById("stat2").checked;
let toBeRev = document.getElementById("stat3").checked;
let dun = document.getElementById("stat4").checked; 

  if (
    toDo === true || inProg === true || toBeRev === true || dun === true
    ) {
    document.getElementById("Rerror").innerHTML = "";
    return true;
  } else {
    document.getElementById("Rerror").innerHTML = 
    "Please select one task status from above";
    return false;
  }
};



setInterval(nosub, 100);

function nosub() {
  
  let uhoh = document.getElementById("subvin");

  if (selectRadio.value = false, toDate.value = false, checkAss.value = false,
    checkDesc.value = false, checkName.value = false) {
      uhoh.disabled = true;
    } else {
      uhoh.disabled = false;
    }
};
