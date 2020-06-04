const addTaskButton = document.querySelector('#addTaskButton');
const taskText = document.querySelector('#taskText')
const todoList = document.querySelector('#todoList');
const statusRadioButton = document.getElementsByName('status');
const status = {0: 'すべて', 1: '作業中', 2: '完了'};
let todos = [];
const resetIds = () => {
    document.querySelectorAll('.id').forEach((td, index) => {
        td.textContent = String(index);
    });
};
const displayTask = (task, todos) => {
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
        buttonStatus.setAttribute('data-status-num', '1');
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
    buttonStatus.addEventListener('click', (evt) => {
        switch (buttonStatus.value) {
            case status[1]:
                buttonStatus.value = status[2];
                buttonStatus.dataset.statusNum = '2';
                break;
            case status[2]:
                buttonStatus.value = status[1];
                buttonStatus.dataset.statusNum = '1';
                break;
        }
    });
};
addTaskButton.addEventListener('click', (evt) => {
    const task = taskText.value;
    if (task.length) {
        displayTask(task, todos);
        taskText.value = '';
    }
});
statusRadioButton.forEach(e => {
    e.addEventListener('click', evt => {
        document.querySelectorAll('.todo').forEach(e => {
            e.style.display = 'table-row';
        })
        switch (e.dataset.statusNum) {
            case '0':
                break;
            case '1':
                if (todoList.querySelectorAll('[data-status-num="2"]').length) {
                    todoList.querySelectorAll('[data-status-num="2"]').forEach(e => {
                        e.parentNode.parentNode.style.display = 'none';
                    });
                }
                break;
            case '2':
                if (todoList.querySelectorAll('[data-status-num="1"]').length) {
                    todoList.querySelectorAll('[data-status-num="1"]').forEach(e => {
                        e.parentNode.parentNode.style.display = 'none';
                    });
                }
                break;
        }
    });
});
