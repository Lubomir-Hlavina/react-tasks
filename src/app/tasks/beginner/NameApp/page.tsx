'use client';

// Goal: Practice working with state for text inputs.

// Task:

// Create a NameApp component.

// Use useState to store name (an empty string).

// Display an input (<input type="text" />) and the text “Hello, {name}!”.
// The text should update immediately as you type into the input.

// 👉 Bonus:

// If name is empty, display “Enter your name”.

import Container from '@/components/ui/Container';
import { InputGroup, InputGroupInput } from '@/components/ui/input-group';
import React, { useState } from 'react';

function NameApp() {
  const [name, setName] = useState('');

  return (
    <Container>
      {!name && <p>Enter your name</p>}
      <InputGroup>
        <InputGroupInput
          type="text"
          placeholder="Insert name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></InputGroupInput>
      </InputGroup>
      {name && <p>Hello, {name}</p>}
    </Container>
  );
}

export default NameApp;
