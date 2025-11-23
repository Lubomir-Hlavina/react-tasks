'use client';

// Task:

// Create a `CharacterCounter` component.

// Use `useState` to store `text` (an empty string).

// Display an `<input type="text" />` where the user can type text.

// Below it, display: **“Number of characters: X”**, where X is `text.length`.

// 👉 **Bonus:**

// If the text is longer than 20 characters, display a warning: **“Too long! ✋”**.

import Container from '@/components/ui/Container';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState<string>('');

  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Number of characters: {text.length}</p>
      {text.length > 20 && <p>Too long!</p>}
    </Container>
  );
}

export default CharacterCounter;
