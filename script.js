const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const deadlineInput = document.getElementById("deadlineInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function addTask() {
    const taskText = taskInput.value.trim();
    const category = categoryInput.value;
    const deadline = deadlineInput.value;

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // Category
    const categorySpan = document.createElement("span");
    categorySpan.textContent = category;
    categorySpan.classList.add("task-category");

    // Deadline
    const deadlineSpan = document.createElement("span");

    if (deadline !== "") {
        const date = new Date(deadline);
        deadlineSpan.textContent = " ⏰ " + date.toLocaleString();
    } else {
        deadlineSpan.textContent = " ⏰ No deadline";
    }

    deadlineSpan.classList.add("task-deadline");

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    // Add everything to the task
    li.appendChild(categorySpan);
    li.appendChild(span);
    li.appendChild(deadlineSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = "";
    deadlineInput.value = "";

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