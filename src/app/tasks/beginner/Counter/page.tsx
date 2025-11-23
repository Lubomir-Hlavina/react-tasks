'use client';

// TASK:

// Create a Counter component.

// It should display the current number (count) – starting at 0.

// Below it, add two buttons: + and −.

// Clicking + increases the value by 1.

// Clicking − decreases the value by 1 (it can go into negative numbers).

// Add a Reset button that sets the value back to 0.

// 👉 Bonus (optional): if count > 0, display the text “Positive number!”; if count < 0, display “Negative number!”.

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <p>{count}</p>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>+</Button>
      <Button onClick={() => setCount((prevCount) => prevCount - 1)}>-</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
      {count !== 0 && (
        <p>{count > 0 ? 'Positive number' : 'Negative number'}</p>
      )}
    </Container>
  );
}

export default Counter;
