const form = document.querySelector("form");

const taskInput = document.querySelector("#task");

form.addEventListener("submit", addTask);

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
  // find <ul> dom component
  const ul = document.querySelector(".collection");
  // add <li> to <ul>
  ul.appendChild(li);

  console.log(ul);

  // clear input value
  taskInput.value = "";
  e.preventDefault();
}
