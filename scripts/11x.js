const todoList = JSON.parse(window.localStorage.getItem('todos')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const {name, dueDate} = todoObj;

    const html = `
      <div> ${name}</div>
      <div> ${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  window.localStorage.setItem('todos', JSON.stringify(todoList));
}



function addTodo() {
  const inputEl = document.querySelector('.js-name-input');
  const dateInputEl = document.querySelector('.js-due-date-input');
  const name = inputEl.value;
  const dueDate = dateInputEl.value;

  // todoList.push({name: name, dueDate: dueDate});
  todoList.push({name, dueDate});


  inputEl.value = '';

  renderTodoList()
  // save todos in localstorage
  window.localStorage.setItem('todos', JSON.stringify(todoList))
}