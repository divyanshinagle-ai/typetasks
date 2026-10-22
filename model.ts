// TaskStatus literal union type
export type TaskStatus = "todo" | "in-progress" | "done";

// Task interface
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// Core operations
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// "Make It Yours" custom operations
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;

    let nextStatus: TaskStatus = task.status;
    if (task.status === "todo") nextStatus = "in-progress";
    else if (task.status === "in-progress") nextStatus = "done";

    return { ...task, status: nextStatus };
  });
}