'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function NameList() {
  const [names, setNames] = useState([
    { id: crypto.randomUUID(), name: 'Adam' },
    { id: crypto.randomUUID(), name: 'Boris' },
    { id: crypto.randomUUID(), name: 'Cyril' },
  ]);

  const [newName, setNewName] = useState('');

  function updateList() {
    if (!newName.trim()) return;

    const newItem = {
      id: crypto.randomUUID(),
      name: newName,
    };

    setNames([...names, newItem]);
    setNewName('');
  }

  return (
    <Container>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <Button onClick={updateList}>Add name</Button>
      <Button onClick={() => setNames([])}>Reset</Button>
    </Container>
  );
}

export default NameList;
