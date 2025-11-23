'use client';

import Container from '@/components/ui/Container';
// TASK

// After the component mounts, use useEffect to make a fetch request to some API (e.g. https://jsonplaceholder.typicode.com/todos
// ) and display the first 5 items.

import { useEffect, useState } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function UseEffect1() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data: Todo[]) => setTodos(data.slice(0, 5)))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Container>
  );
}

export default UseEffect1;
