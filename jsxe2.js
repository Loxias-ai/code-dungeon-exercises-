const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");

addTaskButton.addEventListener("click", function() {
  const newTask = newTaskInput.value;
  if (newTask) {
    const listItem = document.createElement("li");
    const taskText = document.createTextNode(newTask);
    listItem.appendChild(taskText);

    // Add button to mark task as done
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", function() {
      listItem.classList.add("done");
    });
    listItem.appendChild(doneButton);

    // Add button to remove task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      listItem.remove();
    });
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
    newTaskInput.value = ""; // Clear input field
  }
});
let feb = 14;
for(let i = 0; i < feb; i++){
  console.log("happy valentines day feb");
}
let object = {
  firstnaem:"niga",
  lastname:"j0b",
}
console.log(object);