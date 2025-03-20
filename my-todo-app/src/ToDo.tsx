import { useState } from "react";

interface Task {
  id: number;
  text: string;
}

const ToDo: React.FC = () => {
  const [task, setTask] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTodo: Task = { id: Date.now(), text: newTask };
    setTask([...task, newTodo]);
    setNewTask("");
  };

  const removeTask = (id: number) => {
    setTask(task.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {task.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => removeTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
