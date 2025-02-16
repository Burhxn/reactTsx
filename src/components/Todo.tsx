import { useState } from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [task, setTask] = useState<string>(""); 

  const addTodo = (task: string) => {
    if (!task.trim()) return; // 

    const newTodo: Todo = {
      id: Date.now(),
      task,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]); 
    setTask(""); 
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={() => addTodo(task)}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.task} {t.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
