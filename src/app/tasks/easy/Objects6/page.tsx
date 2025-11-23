'use client';

import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

function Objects6() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Kúpiť chlieb', done: false },
    { id: 2, text: 'Umyť auto', done: false },
  ]);

  function addTodo() {
    if (!newTodo.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newTodo,
        done: false,
      },
    ]);

    setNewTodo('');
  }

  function toggleDone(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">To-do list</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New task..."
          className="border p-2 rounded w-full"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button onClick={addTodo}>Add</Button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between border p-3 rounded"
          >
            <span
              onClick={() => toggleDone(todo.id)}
              className={`cursor-pointer select-none ${
                todo.done ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.text}
            </span>

            <Button variant="destructive" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Objects6;
