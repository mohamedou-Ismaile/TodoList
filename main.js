// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");

// Focus On Input Field
window.onload = function () {
  theInput.focus();
};

// Adding The Task
theAddButton.onclick = function () {

  // If Input is Empty
  if (theInput.value === '') {

    alert("No Value");

  }
  else {

    let noTasksMsg = document.querySelector(".no-tasks-message");

    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {

      // Remove No Tasks Message
      noTasksMsg.remove();

    }

    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
	let deleteElement = document.createElement("span");
	

    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");

    // Add Text To Main Span
	mainSpan.appendChild(text);
	// Add Class To Main Span
    mainSpan.className = 'task-box';

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class To Delete Button
    deleteElement.className = 'delete';

    // Add Delete Button To Main Span
	mainSpan.appendChild(deleteElement);
	

// Create done Button
let doneElement = document.createElement("span");

// Create The done Button Text
let doneText = document.createTextNode("Done");

 // Add Text To done Button
 doneElement.appendChild(doneText);
 
// Add Class To done Button
doneElement.className = 'done';


// Add done Button To Main Span
mainSpan.appendChild(doneElement);

    // Add The Task To The Container
    tasksContainer.appendChild(mainSpan);

    // Empty The Input
    theInput.value = '';

    // Focus On Field
    theInput.focus();

    // Calculate Tasks
    calculateTasks();

  }
};

document.addEventListener('click', function (e) {

  // Delete Task
  if (e.target.className == 'delete') {

    // Remove Current Task
    e.target.parentNode.remove();

    // Check Number Of Tasks Inside The Container
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }
  calculateTasks();

});
//done && undone Tasks
document.addEventListener('click', function (e) {
	
		if(e.target.className == 'done'){   
			           
		e.target.parentNode.style.textDecoration = "line-through";
		e.target.className = 'undone';
		e.target.textContent ='Undone';
	

			}
		 	else if (e.target.className == 'undone'){
			
			e.target.parentNode.style.textDecoration = "none";
			e.target.className = 'done';
			e.target.textContent ='Done';
}	
			// Calculate Tasks
		 
			calculateTasks();
	  
	 
});

// Function To Create No Tasks Message
function createNoTasks() {

	// Create Message Span Element
	let msgSpan = document.createElement("span");
  
	// Create The Text Message
	let msgText = document.createTextNode("No Tasks To Show");
  
	// Add Text To Message Span Element
	msgSpan.appendChild(msgText);
  
	// Add Class To Message Span
	msgSpan.className = 'no-tasks-message';
  
	// Append The Message Span Element To The Task Container
	tasksContainer.appendChild(msgSpan);
  
  }
  // Function To Calculate Tasks
function calculateTasks() {

	// Calculate All Tasks
	tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
   
  }