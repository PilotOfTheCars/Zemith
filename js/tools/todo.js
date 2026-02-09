// Shared To-Do List for Group Projects

const todoList = [];

function addTask(task) {
    if (!task) {
        console.error('Task cannot be empty.');
        return;
    }
    todoList.push({ task, completed: false });
    console.log(`Task added: ${task}`);
}

function removeTask(index) {
    if (index < 0 || index >= todoList.length) {
        console.error('Invalid task index.');
        return;
    }
    const removed = todoList.splice(index, 1);
    console.log(`Task removed: ${removed[0].task}`);
}

function markTaskAsCompleted(index) {
    if (index < 0 || index >= todoList.length) {
        console.error('Invalid task index.');
        return;
    }
    todoList[index].completed = true;
    console.log(`Task marked as completed: ${todoList[index].task}`);
}

function listTasks() {
    console.log('To-Do List:');
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.task}`);
    });
}

// Example usage:
// addTask('Finish the report');
// addTask('Prepare for the meeting');
// listTasks();
// markTaskAsCompleted(0);
// listTasks();
