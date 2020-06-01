const addTaskButton = document.querySelector('#addTaskButton');
const taskText = document.querySelector('#taskText')
const todoList = document.querySelector('#todoList');
const addTask = task => {
    const todo = document.getElementsByClassName('todo');
    const id = todo !== undefined ? todo.length : 0;
    const html =
        `<tr class="todo">
            <td>${id}</td>
            <td>${task}</td>
            <td>
                <input type="submit" value="作業中">
            </td>
            <td>
                <input type="submit" value="削除">
            </td>
        </tr>`;
    todoList.innerHTML += html;
};
addTaskButton.addEventListener('click', e => {
    const task = taskText.value;
    if (task.length) {
        addTask(task);
        taskText.value = '';
    }
});
