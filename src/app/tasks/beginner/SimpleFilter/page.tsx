'use client';

// TASK
// You are given an array of strings (e.g., names). Create a component that displays an input field and, below it, a filtered list that updates in real time based on what the user types.

// Evaluation criteria:

// controlled components

// using map + filter

// render optimization (optional, but a plus)

import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function SimpleFilter() {
  const [names, setNames] = useState([
    'Janko',
    'Ferko',
    'Misko',
    'Janka',
    'zuzka',
  ]);
  const [query, setQuery] = useState('');

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <input
        type="text"
        placeholder="Enter name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default SimpleFilter;
