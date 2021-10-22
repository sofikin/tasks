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

  console.log(a);

  // clear input value
  taskInput.value = "";
  e.preventDefault();
}

function deleteTask(e) {
  if (e.target.textContent == "x") {
    if (confirm("Do you want to delete this task?")) {
      e.target.parentElement.remove();
    }
  }
}

function deleteTasks() {
  // tasksList.innerHTML = "";
  console.log();
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
  }
}
