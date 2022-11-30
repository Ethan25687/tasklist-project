

window.onload = function() {

  document.getElementById('taskn').addEventListener('focus', checkName);
  document.getElementById('taskn').addEventListener('focusout', checkName);

  document.getElementById('taskdesc').addEventListener('focus', checkDesc);
  document.getElementById('taskdesc').addEventListener('focusout', checkDesc);

  document.getElementById('assign').addEventListener('focus', checkAss);
  document.getElementById('assign').addEventListener('focusout', checkAss);

  document.getElementById('dater').addEventListener('change', toDate);

  document.getElementById('subvin').addEventListener('mouseover', selectRadio);

//  document.getElementById("addass").addEventListener('click', strtIN);
//  document.getElementById("cls").addEventListener('click', stopIN);
  
  
};
 

function checkName() { 
  let nmlength = document.getElementById("taskn").value; 
  const minlength = 1;
  const maxlength = 8;

  if (nmlength.length< minlength || nmlength.length> maxlength) { 
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
   
  if (nmlength.length< minlength || nmlength.length> maxlength) { 
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
   
  if (nmlength.length< minlength || nmlength.length> maxlength) { 
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

  let sugDate =new Date(document.getElementById("dater").value);

  if (sugDate < today || !Date.parse(sugDate)) {
    document.getElementById("dateError").innerHTML = 
    "Must select a date. Cannot select a date that has already passed"
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
    "";
    return false;
  }
};

//var timeForCh = null

//function strtIN () {
//  timeForCh = 
  setInterval(nosub, 500);
//};
//function stopIN() {
//  clearInterval(timeForCh)
//};


function nosub() {
  
  let uhoh = document.getElementById("subvin");
  
  let tskArray = [selectRadio(), toDate(), checkAss(), checkDesc(), checkName()]
  
  

  if (tskArray.every(element => element === true) === true) {
    uhoh.disabled = false;
    document.getElementById("subvin").style.backgroundColor = "white";
    document.getElementById("subvin").style.color = "black";
  } else {
    uhoh.disabled = true;
    document.getElementById("subvin").style.backgroundColor = "red";
    document.getElementById("subvin").style.color = "white";
  };

};
