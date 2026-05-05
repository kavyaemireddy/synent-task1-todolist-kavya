let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.innerHTML = `
      <span onclick="completeTask(${index})">${task.text}</span>
      <button onclick="completeTask(${index})">Done</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") {
    alert("Enter a task");
    return;
  }

  tasks.push({
    text: task,
    completed: false
  });

  input.value = "";

  saveTasks();
  showTasks();
}

function completeTask(index) {
  tasks[index].completed = true;
  saveTasks();
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  showTasks();
}

showTasks();


