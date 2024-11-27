const form = document.querySelector("form");//form feed
const input = document.querySelector("form input"); // form input feed
const tasksContainer = document.querySelector(".tasks"); // task field!

let todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = {text: input.value,checked: false,id: new Date().getTime(),};

  todos.push(todo);
  e.target.reset();
  displayTodos();
});

const displayTodos = () => {
  tasksContainer.innerHTML = "";

  todos.forEach((todo) => {
    const taskvalue = document.createElement("div");
    const inputvalue = document.createElement("input");
    const textvalue = document.createElement("p");
    const deletebutton = document.createElement("button");

    taskvalue.classList.add("task");
    inputvalue.classList.add("checkbox");
    textvalue.classList.add("text");
    deletebutton.classList.add("delete");
    

    inputvalue.type = "checkbox";
    textvalue.innerHTML = todo.text;
    deletebutton.innerHTML = "Delete";

    deletebutton.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      displayTodos();
    });

    inputvalue.addEventListener("change", (e) => {
      todo.checked = e.target.checked;
      console.log(e.target);

      if (todo.checked) {
        taskvalue.classList.add("done");
      } else {
        taskvalue.classList.remove("done");
      }
    });

    taskvalue.appendChild(inputvalue);
    taskvalue.appendChild(textvalue);
    taskvalue.appendChild(deletebutton);
    tasksContainer.appendChild(taskvalue);
  });
};