import React, { useState } from 'react';

import { useEffect } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function Playground() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((resp) => {
        if (!resp.ok) throw new Error('Network error');
        return resp.json();
      })
      .then((data: Todo[]) => setTodos(data.slice(0, 5)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playground;
