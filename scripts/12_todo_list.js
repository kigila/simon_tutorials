const todoList = [
  {name: 'make dinner', dueDate: '2024-06-16'},
  {name: 'go to gym', dueDate: '2024-06-15'}
];

renderTodoList();


function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObj, index) => {
    const {name, dueDate} = todoObj;

    const html = `
      <div> ${name}</div>
      <div> ${dueDate}</div>
      <button class="delete-todo-btn js-delete-btn">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    })
  })
}

document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputEl = document.querySelector('.js-name-input');
  const dateInputEl = document.querySelector('.js-due-date-input');
  const name = inputEl.value;
  const dueDate = dateInputEl.value;

  // todoList.push({name: name, dueDate: dueDate});
  todoList.push({name, dueDate});

  inputEl.value = '';

  renderTodoList()
}