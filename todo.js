const addTaskButton = document.querySelector('#addTaskButton');
const taskText = document.querySelector('#taskText')
const todoList = document.querySelector('#todoList');
let todos = [];
const resetIds = () => {
    document.querySelectorAll('.id').forEach((td, index) => {
        td.textContent = String(index);
    });
};
const displayTask = (task, todos) => {
    const status = {0: 'すべて', 1: '作業中', 2: '完了'};
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdTask = document.createElement('td');
    const tdStatus = document.createElement('td');
    const buttonStatus = document.createElement('input');
    const buttonDelete = document.createElement('input');
    const tdDelete = document.createElement('td');
    todos.push({comment: task, status: status[1]});
    todos.forEach(element => {
        tr.className = 'todo';
        tdId.className = 'id';
        tdTask.textContent = element.comment;
        buttonStatus.setAttribute('type', 'submit');
        buttonStatus.setAttribute('value', element.status);
        buttonDelete.setAttribute('type', 'submit');
        buttonDelete.setAttribute('value', '削除');
        tdStatus.appendChild(buttonStatus);
        tdDelete.appendChild(buttonDelete);
        tr.appendChild(tdId);
        tr.appendChild(tdTask);
        tr.appendChild(tdStatus);
        tr.appendChild(tdDelete);
        todoList.appendChild(tr);
    });
    resetIds();
    buttonDelete.addEventListener('click', (evt) => {
        todos.splice(todos.length, 1);
        tr.parentNode.removeChild(tr);
        resetIds();
    });
};
addTaskButton.addEventListener('click', {array: todos, handleEvent(evt) {
    const task = taskText.value;
    if (task.length) {
        displayTask(task, todos);
        taskText.value = '';
    }
}});
