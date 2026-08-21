const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const deadlineInput = document.getElementById("deadlineInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const category = categoryInput.value;
    const deadline = deadlineInput.value;

    const li = document.createElement("li");

    // Category
    const categorySpan = document.createElement("span");
    categorySpan.textContent = category;
    categorySpan.classList.add("task-category");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // Deadline
    const deadlineSpan = document.createElement("span");
    deadlineSpan.classList.add("task-deadline");

    if (deadline !== "") {
        const date = new Date(deadline);
        deadlineSpan.textContent = "⏰ " + date.toLocaleString();
    } else {
        deadlineSpan.textContent = "⏰ No deadline";
    }

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

        // Delete animation
        li.style.transition =
            "opacity 0.3s ease, transform 0.3s ease";

        li.style.opacity = "0";
        li.style.transform = "translateX(30px)";

        setTimeout(function () {
            li.remove();
            updateTaskCount();
        }, 300);
    });

    // Add everything
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

// Add task with button
addTaskBtn.addEventListener("click", addTask);

// Add task with Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

// Update task counter
function updateTaskCount() {
    const numberOfTasks = taskList.children.length;
    taskCount.textContent = "Tasks: " + numberOfTasks;
}
