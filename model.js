let nextId = 1;
// Core operations
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
export function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// "Make It Yours" custom operations
export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
export function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        let nextStatus = task.status;
        if (task.status === "todo")
            nextStatus = "in-progress";
        else if (task.status === "in-progress")
            nextStatus = "done";
        return { ...task, status: nextStatus };
    });
}
//# sourceMappingURL=model.js.map