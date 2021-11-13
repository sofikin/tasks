const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const tasksList = document.querySelector(".collection");
const delTasksBtn = document.querySelector("#del-tasks");

form.addEventListener("submit", addTask);
tasksList.addEventListener("click", deleteTask);
delTasksBtn.addEventListener("click", deleteTasks);

function addTask(e) {
  // input value
  const task = taskInput.value;
  // create <li> element
  const li = document.createElement("li");
  // define <li> css class
  li.className = "collection-item";
  // create text value for <li>
  const text = document.createTextNode(task);
  // add text value to <li>
  li.appendChild(text);
  // create link element
  const a = document.createElement("a");
  // set href attribute
  a.setAttribute("href", "#");
  // add css style
  a.className = "secondary-content";
  // add x text to link
  a.appendChild(document.createTextNode("x"));
  li.appendChild(a);
  // find <ul> dom component
  const ul = document.querySelector(".collection");
  // add <li> to <ul>
  ul.appendChild(li);
  // save task
  addTaskToLocalStorage(task);
  // clear input value
  taskInput.value = "";
  e.preventDefault();
}

function addTaskToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(e) {
  if (e.target.textContent === "x") {
    if (confirm("Do you want to delete this task?")) {
      e.target.parentElement.remove();
      task = e.target.parentElement.firstChild.textContent;
      deleteTaskFromLocalStorage(task);
    }
  }
}

function deleteTasks() {
  // tasksList.innerHTML = "";
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
  }
  deleteAllTaskFromLocalStorage();
}

function deleteTaskFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (tasksElement, index) {
    if (tasksElement === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteAllTaskFromLocalStorage() {
  // localStorage.clear();
  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  localStorage.removeItem("tasks");
}
