class TaskManager {
  constructor(task) {
      this._taskId = 0; // Integer
      this._taskName = taskName; // String
      this._taskDescription = taskDescription; // String
      this._assignedTo = assignedTo; // String
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

    get assignedTo() {
        return this._assignedTo;
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