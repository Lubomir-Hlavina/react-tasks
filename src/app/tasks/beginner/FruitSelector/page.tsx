'use client';

// Here is the English translation:

// ---

// **Task:**

// Create a `FruitSelector` component.

// Use `useState` to store the selected fruit (`fruit`), e.g., an empty string.

// Display a `<select>` with options: 🍎 Apple, 🍌 Banana, 🍊 Orange.

// Below the select, display the text: **“Your favorite fruit is: {fruit}”** (only show it when something is selected).

// 👉 **Bonus:**

// Add a **Reset** button that sets `fruit` back to an empty string.

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';
import React, { useState } from 'react';

function FruitSelector() {
  const [fruit, setFruit] = useState<string>('');

  return (
    <Container>
      <Select value={fruit} onValueChange={(value: string) => setFruit(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple 🍎</SelectItem>
            <SelectItem value="banana">Banana 🍌</SelectItem>
            <SelectItem value="orange">Orange 🍊</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {fruit && <p>Your favorite fruit is: {fruit}</p>}
      <Button onClick={() => setFruit('')}>Reset</Button>
    </Container>
  );
}

export default FruitSelector;
