'use client';

// TASK

// Goal:

// Practice using useState with a number and working with multiple buttons.

// Assignment:

// Create a component called ClickCounter.

// It should display the number of clicks.

// Buttons: "+1", "-1", "Reset".

// The value must not go below 0.

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  const minusOne = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <Container>
      <p>{counter}</p>
      <Button onClick={() => setCounter((preState) => preState + 1)}>+</Button>
      <Button onClick={minusOne}>-</Button>
      <Button onClick={() => setCounter(0)}>Reset</Button>
    </Container>
  );
}

export default ClickCounter;
