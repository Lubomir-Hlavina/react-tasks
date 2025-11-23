'use client';

// TASK

// Create a component called NumberList.

// Have an array of numbers in the state, for example: [1, 2, 3, 4, 5].

// Using .map(), display each element and its double, for example:
// 1 → 2, 2 → 4, etc.

// Display it like this:

// 1 x 2 = 2
// 2 x 2 = 4
// ...

// 👉 Bonus:

// Add a button "Add number" that adds another number (e.g., the last number + 1).

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function NumberList() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  return (
    <Container>
      {numbers.map((number) => (
        <p key={number}>
          {number} * 2 = {number * 2}
        </p>
      ))}

      <Button
        onClick={() =>
          setNumbers([...numbers, numbers[numbers.length - 1] + 1])
        }
      >
        Add number
      </Button>
    </Container>
  );
}

export default NumberList;
