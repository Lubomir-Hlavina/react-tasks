'use client';

// Task:

// Create a RandomNumber component.

// Use useState to store number (start at 0).

// Display the text “Number: X”.

// Below it, display a button Generate – when clicked, set a random integer from 1 to 100 into the state.

// 👉 Bonus:

// If the number is greater than 50, display “Big number!”.

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  function generateNumber() {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <Container>
      <p>{randomNumber}</p>
      <Button onClick={generateNumber}>Generate number</Button>
      {randomNumber > 50 && <p>Big number!</p>}
    </Container>
  );
}

export default RandomNumber;
