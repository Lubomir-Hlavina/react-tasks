'use client';

// TASK: Understand boolean state and conditions in rendering.

// Task:

// Create a ToggleText component.

// Use useState to store isVisible (starting as true).

// Display a button:

// if isVisible is true, the button text should be "Hide"

// otherwise "Show"

// Below the button, display the text "Hello, React!", but only if isVisible is true.

// 👉 Bonus:

// Try changing the text color based on the state (e.g., green when visible, gray when not).

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container>
      <Button
        onClick={() => setIsVisible((prevState) => !prevState)}
        className={isVisible ? 'bg-red-500' : 'bg-green-500'}
      >
        {isVisible ? 'Hide text' : 'Show text'}
      </Button>
      {isVisible && <p>Hi, React!</p>}
    </Container>
  );
}

export default ToggleText;
