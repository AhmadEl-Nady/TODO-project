const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    updateTaskCount();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function updateTaskCount() {
    const numberOfTasks = taskList.children.length;
    taskCount.textContent = "Tasks: " + numberOfTasks;
}
