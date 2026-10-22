import { addTask, advanceTask, filterByStatus } from "./model.js";
let tasks = [];
let currentFilter = "all";
// Type-cast DOM elements
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
const filterBtns = document.querySelectorAll(".filter-btn");
// Handle Add Task
addBtn.onclick = () => {
    const title = titleInput.value.trim();
    if (!title)
        return;
    tasks = addTask(tasks, title);
    titleInput.value = "";
    render();
};
// Handle Filters
filterBtns.forEach((btn) => {
    btn.onclick = () => {
        const status = btn.getAttribute("data-status");
        currentFilter = status;
        render();
    };
});
// Render UI based on state
function render() {
    listEl.innerHTML = "";
    // Handle "all" filter vs specific TaskStatus
    const filteredTasks = currentFilter === "all"
        ? tasks
        : filterByStatus(tasks, currentFilter);
    filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task";
        const textSpan = document.createElement("span");
        textSpan.textContent = `${task.title} [${task.status}]`;
        const advanceBtn = document.createElement("button");
        advanceBtn.textContent = "Advance →";
        advanceBtn.onclick = () => {
            tasks = advanceTask(tasks, task.id);
            render();
        };
        li.appendChild(textSpan);
        li.appendChild(advanceBtn);
        listEl.appendChild(li);
    });
}
//# sourceMappingURL=app.js.map