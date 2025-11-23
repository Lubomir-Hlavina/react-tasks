'use client';

// TASK

// Create a ColorSwitcher component.

// It should have two background colors (e.g., white and light blue).

// Use a button to toggle between the colors.

// In the center, display which color is currently active.

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';

function ColorSwitcher() {
  const [isBlue, setIsBlue] = useState(false);

  return (
    <Container
      className={`${isBlue ? 'bg-blue-500' : 'bg-white'} w-full h-full`}
    >
      <div>
        <h3 className={isBlue ? 'text-white' : 'text-blue-500'}>
          Current color: {isBlue ? 'Blue' : 'White'}
        </h3>
        <Button onClick={() => setIsBlue(!isBlue)}>Change color</Button>
      </div>
    </Container>
  );
}

export default ColorSwitcher;
