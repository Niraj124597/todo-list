var todos = [
  { todoText: "Item 1", completed: false },
  { todoText: "Item 2", completed: false },
  { todoText: "Item 3", completed: false },
];

displayTodos();

var toggleAllButton = document.getElementById("toggle-all-button");
var addButton = document.getElementById("add-button");
var addInput = document.getElementById("add-input");

function displayTodos() {
  var todosUl = document.getElementById("todos-ul");
  // This clears the existing <li>s inside of todosUl.
  todosUl.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {
    var createLi = document.createElement("li");
    createLi.className = 'list-group-item';
    if (todos[i].completed === true) {
      createLi.innerText = "[X] " + todos[i].todoText;
    } else {
      createLi.innerText = "[ ] " + todos[i].todoText;
    }

    var toggleButton = document.createElement("button");
    toggleButton.className = 'btn btn-info ml-2 mr-2'
    toggleButton.innerText = "Toggle";
    toggleButton.addEventListener("click", toggle);
    toggleButton.id = "toggle-" + i;

    var editButton = document.createElement("button");
    editButton.className = 'btn btn-success mr-2'
    editButton.innerText = "Edit";
    editButton.addEventListener("click", editTodo);
    editButton.id = "edit-" + i;

    var deleteButton = document.createElement("button");
    deleteButton.className = 'btn btn-warning'
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteTodo);
    deleteButton.id = "delete-" + i;

    createLi.appendChild(toggleButton);
    createLi.appendChild(editButton);
    createLi.appendChild(deleteButton);
    todosUl.appendChild(createLi);
  }
}

function addTodo() {
  var newTodo = addInput.value;
  todos.push({ todoText: newTodo, completed: false });
  addInput.value = "";
  displayTodos();
}

addButton.addEventListener("click", addTodo);

function editTodo(event) {
  var index = event.currentTarget.id.split("-").pop();
  var editedTodo = prompt("Edit Todo");
  if (editedTodo !== null && editedTodo !== "") {
    todos[index].todoText = editedTodo;
  }
  displayTodos();
}

function deleteTodo(event) {
  var index = event.currentTarget.id.split("-").pop();
  todos.splice(index, 1);
  displayTodos();
}

function toggle(event) {
  var index = event.currentTarget.id.split("-").pop();
  if (todos[index].completed === false) {
    todos[index].completed = true;
  } else {
    todos[index].completed = false;
  }
  displayTodos();
}

function toggleAll() {
  var completedTodos = 0;

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      completedTodos++;
    }
  }
  // if: everything is true
  if (completedTodos === todos.length) {
    for (var i = 0; i < todos.length; i++) {
      // change everything to false
      todos[i].completed = false;
    }
  } else {
    for (var i = 0; i < todos.length; i++) {
      // change everything to true
      todos[i].completed = true;
    }
  }
  displayTodos();
}

toggleAllButton.addEventListener("click", toggleAll);