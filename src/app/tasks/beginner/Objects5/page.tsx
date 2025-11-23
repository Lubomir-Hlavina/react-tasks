'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function Objects5() {
  const [newName, setNewName] = useState('');
  const [shopping, setShopping] = useState({
    items: ['mlieko', 'chlieb'],
  });

  function addName() {
    if (!newName.trim()) return;

    setShopping((prevState) => ({
      ...prevState,
      items: [...prevState.items, newName],
    }));

    setNewName('');
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Enter name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      ></input>
      <Button onClick={addName}>Add name</Button>
      <ul>
        {shopping.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Objects5;
